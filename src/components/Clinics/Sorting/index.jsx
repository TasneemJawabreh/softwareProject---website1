import React, { useState } from "react";
import { Button, Dropdown, DropdownButton, Form, Modal } from "react-bootstrap";
import Style from "./styles.module.css";

const Sorting = ({ setSort }) => {
  return (
    <div className={Style.container}>
      <Form.Label htmlFor="sort" bsPrefix={Style.label}>
        Sort By
      </Form.Label>
      <Form.Select
        size="sm"
        id="Sort"
        bsPrefix={Style.dropdown}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="id">id</option>
        <option value="name">Name</option>
        <option value="rate">Rate</option>
      </Form.Select>
    </div>
  );
};

export default Sorting;
