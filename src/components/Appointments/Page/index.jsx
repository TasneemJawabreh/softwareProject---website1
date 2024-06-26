import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Sorting from "../../Sorting";
import AppTable from "../AppTable";
import axios from "axios";
const Page = () => {

  const [isLoading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [rows1, setRows1] = useState([]);
  const getDoctors = () => {
    axios
      .post("http://localhost/backend/web/past_app.php")
      .then((response) => response.data)
      .then((json) => {
        setRows(json);
        console.log(json);
        //  console.log("gggg");
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    setLoading(true);

    getDoctors();
  }, []);
  const getDoctors1 = () => {
    axios
      .post("http://localhost/backend/web/upcoming_app.php")
      .then((response) => response.data)
      .then((json) => {
        setRows1(json);
        console.log(json);
        //  console.log("gggg");
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    setLoading(true);

    getDoctors1();
  }, []);



  const [appointments, setAppointments] = useState([
    {
      id: "1",
      doctor: {
        img: "https://mdbootstrap.com/img/new/avatars/8.jpg",
        name: "John Doe",
        email: "john.doe@gmail.com",
      },
      patient: {
        img: "https://mdbootstrap.com/img/new/avatars/1.jpg",
        name: "John Doe",
        email: "john.doe@gmail.com",
      },
      clinic: "clinic",
      date: "30/3/2023",
      time: "12:00 am",
      status: true,
    },
    {
      id: "3",
      doctor: {
        img: "https://mdbootstrap.com/img/new/avatars/8.jpg",
        name: "aJohn Doe",
        email: "john.doe@gmail.com",
      },
      patient: {
        img: "https://mdbootstrap.com/img/new/avatars/1.jpg",
        name: "John Doe",
        email: "john.doe@gmail.com",
      },
      clinic: "clinic",
      date: "30/3/2023",
      time: "12:00 am",
      status: true,
    },
    {
      id: "2",
      doctor: {
        img: "https://mdbootstrap.com/img/new/avatars/8.jpg",
        name: "John Doe",
        email: "john.doe@gmail.com",
      },
      patient: {
        img: "https://mdbootstrap.com/img/new/avatars/1.jpg",
        name: "John Doe",
        email: "john.doe@gmail.com",
      },
      clinic: "bclinic",
      date: "29/3/2023",
      time: "12:00 am",
      status: true,
    },
    {
      id: "5",
      doctor: {
        img: "https://mdbootstrap.com/img/new/avatars/8.jpg",
        name: "John Doe",
        email: "john.doe@gmail.com",
      },
      patient: {
        img: "https://mdbootstrap.com/img/new/avatars/1.jpg",
        name: "John Doe",
        email: "john.doe@gmail.com",
      },
      clinic: "aclinic",
      date: "30/3/2023",
      time: "12:00 am",
      status: false,
    },
    {
      id: "4",
      doctor: {
        img: "https://mdbootstrap.com/img/new/avatars/8.jpg",
        name: "John Doe",
        email: "john.doe@gmail.com",
      },
      patient: {
        img: "https://mdbootstrap.com/img/new/avatars/1.jpg",
        name: "aJohn Doe",
        email: "john.doe@gmail.com",
      },
      clinic: "clinic",
      date: "31/3/2023",
      time: "12:00 am",
      status: false,
    },
  ]);

  const [select, setSelect] = useState(false);

  const [sort, setSort] = useState("id");

  const columns = ["Date", "Time", "Patient", "Doctor", "", "Status"];

  const [checked, setChecked] = useState([]);

  const sortOptions = [
    "id",
    "date",
    "Doctor name",
    "Patient name",

  ];

  return (
    <div>
      <h3>UP Coming Appointments</h3>
      <Sorting
        rows={rows1}
        setRows={setRows1}
        select={select}
        setSelect={setSelect}
        setSort={setSort}
        checked={checked}
        options={sortOptions}
      />
      <AppTable
        rows={rows1}
        columns={columns}
        setRows={setRows1}
        sort={sort}
        select={select}
        checked={checked}
        setChecked={setChecked}
      />

      <h3>Past Appointments</h3>
      <Sorting
        rows={rows}
        setRows={setRows}
        select={select}
        setSelect={setSelect}
        setSort={setSort}
        checked={checked}
        options={sortOptions}
      />
      <AppTable
        rows={rows}
        columns={columns}
        setRows={setRows}
        sort={sort}
        select={select}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
};

export default Page;
