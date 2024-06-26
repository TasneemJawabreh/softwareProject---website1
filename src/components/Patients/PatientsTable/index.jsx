import React, { useState } from "react";
import {
  Badge,
  Button,
  Modal,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router";
import Style from "./styles.module.css";
import axios from "axios";
const PatientsTable = ({
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

  const navigateTo = (id) => {
    navigate("/patientHistory", { state: { PatientId: id } });
  };

  var color = "danger";
  var status = "not uploaded";

  var color2 = "danger";
  var status2 = "not answered";

  const handelDelete = (id) => {
    const filtered = rows.filter((item) => item.id !== id);
    setRows(filtered);
  };

  const sorted = rows.sort((p1, p2) => {
    if (sort === "id") {
      return p1.id > p2.id ? 1 : p1.id < p2.id ? -1 : 0;
    } else if (sort === "name") {
      return p1.name > p2.name ? 1 : p1.name < p2.name ? -1 : 0;
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((item, index) => {
            if (!item.uploaded) {
              color = "danger";
              status = "not uploaded";
            } else {
              color = "success";
              status = "uploaded";
            }

            if (item.history == 0) {
              color2 = "danger";
              status2 = "not answered";
            } else {
              color2 = "success";
              status2 = "answered";
            }

            return (
              <tr key={index}>
                <td>
                  <span className={Style.number}>{item.id}</span>
                </td>
                <td>
                  <div className={Style.profile}>
                    <div className={Style.imgContainer}>
                      <img src={item.image} alt="user-img" />
                    </div>
                    <div className={Style.textContainer}>
                      <p className={Style.para}>{item.name}</p>
                      <p className={Style.detail}>{item.email}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={Style.textContainer}>
                    <p className={Style.para}>

                    </p>
                    <p className={Style.detail}>
                      {item.phon_number}
                    </p>
                  </div>
                </td>
                <td>
                  <td className={Style.linkTo}>
                    <Badge bg={color2} onClick={() => navigateTo(item.id)}>
                      {status2}
                    </Badge>
                  </td>
                </td>

                <td>
                  <div className={Style.btn}>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => handleShow(item.id)}
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
                        id={item.id}
                        type="checkbox"
                        variant="outline-primary"
                        checked={checked}
                        value={item.id}
                        onChange={(e) =>
                          setChecked([
                            ...checked,
                            { id: item.id, checked: e.currentTarget.checked },
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

              var Data = {
                id: deleteId,
              };
              axios
                .post("http://localhost/backend/web/delete_patient.php", Data)
                .then((response) => response.data)
                .then((json) => {
                  console.log(json);
                })
                .catch((error) => console.error(error))
              // .finally(() => setLoading(false));
              // handelDelete(item.dr_id);

              handelDelete(deleteId);
              console.log(deleteId);

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

export default PatientsTable;
