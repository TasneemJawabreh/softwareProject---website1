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

const HistoryTable = ({ rows, columns, patientName }) => {
  return (
    <div className={Style.tableContainer}>
      <h3>{patientName} History</h3>
      <Table className={Style.table}>
        <thead className={Style.tableHead}>
          <tr>
            {columns.map((item2) => (
              <th>{item2}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <span className={Style.number}>{item.question}</span>
                </td>
                <td>
                  {item.answers.map((item2) => {
                    return (
                      <div>
                        <span className={Style.number}>{item2}</span>
                      </div>
                    );
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default HistoryTable;
