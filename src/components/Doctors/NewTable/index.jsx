import React, { useState } from "react";
import { Badge, Button, Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Style from "./styles.module.css";
import axios from "axios";
const NewTable = ({
  newDoctors,
  doctors,
  columns,
  setDoctors,
  setNewDoctors,
}) => {
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const handleClose = () => setShow(false);

  const handleShow = (id) => {
    setShow(true);
    setDeleteId(id);
  };

  const handelDelete = (id) => {
    const filtered = newDoctors.filter((doctor) => doctor.dr_id !== id);
    setNewDoctors(filtered);
  };

  const handelConfirm = (doctor) => {
    setDoctors([
      {
        dr_id: doctor.dr_id,
        image: doctor.image,
        dr_name: doctor.dr_name,
        dr_email: doctor.dr_email,
        clinic_speciality: doctor.clinic_speciality,
        status: true,
        schedule: [0],
        dr_rate: doctor.dr_rate,
      },
      ...doctors,
    ]);
  };
  return (
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
          {newDoctors.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <span className={Style.number}>{item.dr_id}</span>
                </td>
                <td>
                  <div className={Style.profile}>
                    <div className={Style.textContainer}>
                      <p className={Style.para}>{item.dr_name}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={Style.textContainer}>
                    <p className={Style.detail}>{item.dr_email}</p>
                    <p className={Style.detail}>{item.dr_phone}</p>
                  </div>
                </td>
                <td>
                  <p className={Style.para2}>{item.clinic_speciality}</p>
                </td>
                <td>
                  <div className={Style.btns}>
                    <Button
                      size="sm"
                      variant="success"
                      onClick={() => {
                        handelConfirm(item);
                        handelDelete(item.dr_id);
                        var Data = {
                          id: item.dr_id,
                        };
                        axios
                          .post("http://localhost/backend/web/confirm_doctor.php", Data)
                          .then((response) => response.data)
                          .then((json) => {
                            console.log(json);
                          })
                          .catch((error) => console.error(error))
                          .finally(() => setLoading(false));
                      }}
                    >
                      <i class="bx bx-check-double"></i>
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => {
                        handleShow(item.dr_id)
                        handelDelete(item.dr_id);
                        var Data = {
                          id: item.dr_id,
                        };
                        axios
                          .post("http://localhost/backend/web/delete_doctor.php", Data)
                          .then((response) => response.data)
                          .then((json) => {
                            console.log(json);
                          })
                          .catch((error) => console.error(error))
                          .finally(() => setLoading(false));
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
        <Modal.Body>are you sure you want delete this account?</Modal.Body>
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
  );
};

export default NewTable;
