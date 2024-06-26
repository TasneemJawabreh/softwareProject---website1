import React, { useState } from "react";
import { Badge, Button, Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Sorting from "../Sorting";
import Style from "./styles.module.css";
import axios from "axios";
const CTable = ({ columns, clinics, setClinics }) => {
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const [sort, setSort] = useState("id");

  var color = "success";
  var status = "work";

  const handleClose = () => setShow(false);

  const handleShow = (id) => {
    setShow(true);
    setDeleteId(id);
  };

  const handelDelete = (id) => {
    const filtered = clinics.filter((clinic) => clinic.id !== id);
    setClinics(filtered);
  };

  const sorted = clinics.sort((p1, p2) => {
    if (sort === "id") {
      return p1.id > p2.id ? 1 : p1.id < p2.id ? -1 : 0;
    } else if (sort === "rate") {
      return p1.rate < p2.rate ? 1 : p1.rate > p2.rate ? -1 : 0;
    } else if (sort === "name") {
      return p1.name > p2.name ? 1 : p1.name < p2.name ? -1 : 0;
    } else return 0;
  });
  return (
    <>
      <h3>All Clinics</h3>
      <Sorting setSort={setSort} />
      <div className={Style.tableContainer}>
        <Table className={Style.table}>
          <thead className={Style.tableHead}>
            <tr>
              <th>#</th>
              {columns.map((item2) => (
                <th>{item2}</th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((item, index) => {
              if (!item.status) {
                color = "primary";
                status = "close";
              } else {
                color = "success";
                status = "open";
              }
              // console.log(item.id)
              return (
                <tr key={index}>
                  <td>
                    <span className={Style.number}>{item.id}</span>
                  </td>
                  <td>
                    <div className={Style.profile}>
                      <div className={Style.imgContainer}>
                        <img src={item.img} alt="user-img" />
                      </div>
                      <div className={Style.textContainer}>
                        <p className={Style.para}>{item.name}</p>

                      </div>
                    </div>
                  </td>
                  <td>
                    <div className={Style.textContainer}>
                      <p className={Style.para}>{item.location}</p>
                    </div>
                  </td>
                  <td>
                    <div className={Style.textContainer}>
                      <span>{item.doctors}</span>
                    </div>
                  </td>
                  <td>
                    <span className={Style.para2}>{item.rate}</span>
                    <i class="bx bxs-star" style={{ color: "#7bc89c" }}></i>
                  </td>
                  <td>
                    <span className={Style.para2}>{item.speciality}</span>
                  </td>

                  <td>
                    <div className={Style.btns}>
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => {
                          handleShow(item.id);
                          // handelConfirm(item);
                          // handelDelete(item.dr_id);
                          var Data = {
                            id: item.id,
                          };
                          axios
                            .post("http://localhost/backend/web/deleteClinic.php", Data)
                            .then((response) => response.data)
                            .then((json) => {
                              console.log(json);
                            })
                            .catch((error) => console.error(error))
                          //   .finally(() => setLoading(false));
                        }}
                      >
                        <i class="bx bx-trash"></i>
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>are you sure you want delete this Clinic?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              No
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                handelDelete(deleteId);
                setShow(false);
              }}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default CTable;
