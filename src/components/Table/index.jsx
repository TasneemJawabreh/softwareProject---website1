import React, { useState } from "react";
import {
  Badge,
  Button,
  Modal,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import Style from "./styles.module.css";
import axios from "axios";
const MyTable = ({
  sort,
  rows,
  columns,
  setRows,
  select,
  checked,
  setChecked,
}) => {
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const navigate = useNavigate();

  const handleClose = () => setShow(false);

  const handleShow = (id) => {
    setShow(true);
    setDeleteId(id);
  };

  var color = "success";
  var status = "work";

  const handelDelete = (id) => {
    const filtered = rows.filter((item) => item.dr_id !== id);
    setRows(filtered);
  };

  const navigateTo = (id) => {
    navigate("/doctorTable", { state: { DoctorId: id } })
  };

  const sorted = rows.sort((p1, p2) => {
    if (sort === "id") {
      return p1.dr_id > p2.dr_id ? 1 : p1.dr_id < p2.dr_id ? -1 : 0;
    } else if (sort === "rate") {
      return p1.dr_rate < p2.dr_rate ? 1 : p1.dr_rate > p2.dr_rate ? -1 : 0;
    } else if (sort === "name") {
      return p1.dr_name > p2.dr_name ? 1 : p1.dr_name < p2.dr_name ? -1 : 0;
    } else return 0;
  });

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
          {sorted.map((item, index) => {
            if (!item?.status) {
              color = "danger";
              status = "not working";
            } else {
              color = "success";
              status = "working";
            }

            return (
              <tr key={index}>
                <td>
                  <span className={Style.number}>{item.dr_id}</span>
                </td>
                <td>
                  <div className={Style.profile}>
                    <div className={Style.imgContainer}>
                      <img src={item.image} alt="user-img" />
                    </div>
                    <div className={Style.textContainer}>
                      <p className={Style.para}>{item.dr_name}</p>
                      <p className={Style.detail}>{item.dr_email}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className={Style.para}>{item.clinic_speciality}</p>
                  {/* <p className={Style.detail}>IT department</p> */}
                </td>

                <td>
                  <Link></Link>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => navigateTo(item.dr_id)}
                  >
                    view schedule
                  </Button>
                </td>
                <td>
                  <div>
                    <span> {item.dr_rate}</span>
                    <i class="bx bxs-star" style={{ color: "#7bc89c" }}></i>
                  </div>
                </td>
                <td>
                  <div className={Style.btn}>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => {
                        //  handleShow(item.dr_id);
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
                        handelDelete(item.dr_id);

                        // console.log(item.dr_id);
                        // console.log("jjjj");
                      }


                      }
                    >
                      <i class="bx bx-trash"></i>
                    </Button>
                  </div>
                </td>
                {select && (
                  <td>
                    <ToggleButtonGroup
                      type="checkbox"
                      defaultValue={[1, sorted.length]}
                      className="mb-2"
                    >
                      <ToggleButton
                        size="sm"
                        id={item.dr_id}
                        type="checkbox"
                        variant="outline-primary"
                        checked={checked}
                        value={item.dr_id}
                        onChange={(e) =>
                          setChecked([
                            ...checked,
                            { id: item.dr_id, checked: e.currentTarget.checked },
                          ])
                        }
                      >
                        <i class="bx bx-check"></i>{" "}
                      </ToggleButton>
                      {/* <Button
                      size="sm"
                      variant={"primary"}
                      onClick={() => {
                        setDeleted([...deleted, item]);
                      }}
                    >
                      <i class="bx bx-check"></i>{" "}
                    </Button> */}
                    </ToggleButtonGroup>
                  </td>
                )}
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
              handelDelete(10);
              //  console.log(deleteId);
              setShow(false);

            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div >
  );
};

export default MyTable;
