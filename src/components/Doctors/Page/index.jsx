import React, { useContext } from "react";
import { useState, useEffect } from "react";
import NewTable from "../NewTable";
import Sorting from "../../Sorting";
import MyTable from "../../Table";
import axios from "axios";
const Page = () => {
  const [doctors, setDoctors] = useState([]);
  const [newDoctors, setNewDoctors] = useState([]);
  const [isLoading, setLoading] = useState(false);




  const getDoctors = () => {
    axios
      .post("http://localhost/backend/web/accepted_doctores.php")
      .then((response) => response.data)
      .then((json) => {
        setDoctors(json);
        console.log(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    setLoading(true);
    getDoctors();
  }, []);


  const getNewdoctors = () => {
    axios
      .post("http://localhost/backend/web/new_doctors.php")
      .then((response) => response.data)
      .then((json) => {

        setNewDoctors(json);
        console.log(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    setLoading(true);
    getNewdoctors();
  }, []);



  // const [doctors, setDoctors] = useState([
  //   {
  //     id: "1",
  //     img: "https://mdbootstrap.com/img/new/avatars/8.jpg",
  //     name: "John Doe",
  //     email: "john.doe@gmail.com",
  //     clinic: "Ophthalmology",
  //     status: true,
  //     schedule: ["9:00", "11:00", "12:00"],
  //     confirmed: true,
  //     rate: 2.5,
  //   },
  //   {
  //     id: "2",
  //     img: "https://mdbootstrap.com/img/new/avatars/8.jpg",
  //     name: "John Doe2",
  //     email: "john.doe@gmail.com",
  //     clinic: "Ophthalmology",
  //     status: true,
  //     schedule: ["9:00", "11:00", "12:00"],
  //     confirmed: true,
  //     rate: 3,
  //   },
  //   {
  //     id: "3",
  //     img: "https://mdbootstrap.com/img/new/avatars/8.jpg",
  //     name: "John Doe",
  //     email: "john.doe@gmail.com",
  //     clinic: "Ophthalmology",
  //     status: false,
  //     schedule: ["9:00", "11:00", "12:00"],
  //     confirmed: true,
  //     rate: 5,
  //   },
  //   {
  //     id: "4",
  //     img: "https://mdbootstrap.com/img/new/avatars/8.jpg",
  //     name: "John Doe",
  //     email: "john.doe@gmail.com",
  //     clinic: "Ophthalmology",
  //     status: true,
  //     schedule: ["9:00", "11:00", "12:00"],
  //     confirmed: true,
  //     rate: 1.5,
  //   },
  //]);
  // const [newDoctors, setNewDoctors] = useState([
  //   {
  //     id: "1",
  //     name: "John Doe",
  //     email: "john.doe@gmail.com",
  //     phone: "059999999",
  //     specialty: "Ophthalmology",
  //   },
  //   {
  //     id: "2",
  //     name: "John Doe",
  //     email: "john.doe@gmail.com",
  //     phone: "059999999",
  //     specialty: "Ophthalmology",
  //   },
  //   {
  //     id: "3",
  //     name: "John Doe",
  //     email: "john.doe@gmail.com",
  //     phone: "059999999",
  //     specialty: "Ophthalmology",
  //   },
  // ]);

  const [select, setSelect] = useState(false);

  const [sort, setSort] = useState("id");

  const columns2 = ["Name", "Email", "Specialty", "Confirm"];

  const columns = ["Doctor", "Clinic", "Schedule", "Rate", "Account"];

  const [checked, setChecked] = useState([]);

  const sortOptions = ["id", "name", "rate"];

  return (
    <div>
      <h3>Confirm Doctors' Accounts</h3>
      <NewTable
        doctors={doctors}
        columns={columns2}
        setDoctors={setDoctors}
        setNewDoctors={setNewDoctors}
        newDoctors={newDoctors}
      />
      <h3>All Doctors</h3>
      <Sorting
        rows={doctors}
        setRows={setDoctors}
        select={select}
        setSelect={setSelect}
        setSort={setSort}
        checked={checked}
        options={sortOptions}
      />
      <MyTable
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
