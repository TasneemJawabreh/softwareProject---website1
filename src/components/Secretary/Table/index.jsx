import React, { useState } from "react";
import {
  Badge,
  Button,
  ButtonGroup,
  Modal,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Style from "./styles.module.css";

const SecretaryTable = ({
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

  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);

  const handleClose = () => setShow(false);

  var [color, setColor] = useState(false);

  const handelClick = (e, item) => {
    e.preventDefault();
    const updated = {
      ...item,
      paid: !item.paid,
    };

    console.log(updated);

    var foundIndex = rows.findIndex((x) => x.id == item.id);

    rows[foundIndex] = updated;

    setRows(rows);
  };
  console.log(rows);

  return (
    <>
      <div>
        <Button
          variant="primary"
          onClick={(e) => {
            e.preventDefault();
            console.log(rows);
          }}
        >
          save
        </Button>
      </div>
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
            {rows.map((item, index) => {
              if (!item.attend) {
                color = "outline-primary";
              } else {
                color = "primary";
              }

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
                        <p className={Style.detail}>{item.email}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className={Style.profile}>
                      <div className={Style.imgContainer}>
                        <img src={item.imgPatient} alt="user-img" />
                      </div>
                      <div className={Style.textContainer}>
                        <p className={Style.para}>{item.namePatient}</p>
                        <p className={Style.detail}>{item.emailPatient}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className={Style.para}>{item.time}</p>
                  </td>

                  <td>
                    <div className={Style.btn}>
                      <button
                        className={item.attend ? Style.yes : Style.no}
                        onClick={(e) => {
                          setClicked2(!item.attend);

                          e.preventDefault();
                          const updated = {
                            ...item,
                            paid: !item.attend,
                          };
                          console.log(updated);

                          var foundIndex = rows.findIndex(
                            (x) => x.id == item.id
                          );

                          rows[foundIndex] = updated;

                          setRows(rows);
                        }}
                      >
                        <i class="bx bx-check"></i>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className={Style.btn}>
                      <button
                        className={item.paid ? Style.yes : Style.no}
                        onClick={(e) => {
                          setClicked(!item.paid);
                          handelClick(e, item);
                        }}
                      >
                        <i class="bx bx-check"></i>
                      </button>
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
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you want to edit this Appointment?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              No
            </Button>
            <Button
              variant="warning"
              onClick={() => {
                setShow(false);
              }}
            >
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default SecretaryTable;
