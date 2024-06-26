import React, { useState } from "react";
import {
  Badge,
  Button,
  Modal,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Style from "./styles.module.css";

const DTable = ({ rows, columns, doctorName }) => {
  var color = "";
  var status = "";

  return (
    <div className={Style.tableContainer}>
      <h3>Dr. {doctorName} Schedule</h3>
      <Table className={Style.table}>
        <thead className={Style.tableHead}>
          <tr>
            <th>#</th>
            {columns.map((item2) => (
              <th>{item2}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((item, index) => {
            if (item.booked == 1) {
              color = "success";
              status = "booking";
            } else {
              color = "warning";
              status = "not booking";
            }

            return (
              <tr key={index}>
                <td>
                  <span className={Style.number}>{item.app_id}</span>
                </td>
                <td>
                  <div className={Style.profile}>
                    <span className={Style.number}>{item.app_date}</span>
                  </div>
                </td>
                <td>
                  <div className={Style.profile}>
                    <span className={Style.number}>{item.app_time}</span>
                  </div>
                </td>
                <td>
                  <div className={Style.profile}>
                    <Badge bg={color}>{status}</Badge>
                  </div>
                </td>
                <td>
                  <div className={Style.profile}>
                    <span className={Style.number}>{item.name}</span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default DTable;
