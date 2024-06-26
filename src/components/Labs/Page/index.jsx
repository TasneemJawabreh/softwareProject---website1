import React from "react";
import { useState } from "react";
import Sorting from "../../Sorting";
import LabsTable from "../LabsTable";

const Page = () => {
  const [doctors, setDoctors] = useState([
    {
      id: "1",
      img: "http://www.hcchospital.org/Uploads/files/HCCH%20Medical%20Clinic%20Front(1).jpg",
      name: "John Doe",
      phone: "23444444",
      employees: 3,
      status: false,
    },

    {
      id: "2",
      img: "http://www.hcchospital.org/Uploads/files/HCCH%20Medical%20Clinic%20Front(1).jpg",
      name: "John Doe",
      phone: "23444444",
      employees: 3,
      status: true,
    },
  ]);

  const [select, setSelect] = useState(false);

  const [sort, setSort] = useState("id");

  const columns = ["Lab", "Employees", "Status"];

  const [checked, setChecked] = useState([]);

  const sortOptions = ["id", "name"];

  return (
    <div>
      <h3>All Labs</h3>
      <Sorting
        rows={doctors}
        setRows={setDoctors}
        select={select}
        setSelect={setSelect}
        setSort={setSort}
        checked={checked}
        options={sortOptions}
      />
      <LabsTable
        rows={doctors}
        columns={columns}
        setRows={setDoctors}
        sort={sort}
        select={select}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
};

export default Page;
