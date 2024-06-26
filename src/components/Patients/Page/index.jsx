import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Sorting from "../../Sorting";
import PatientsTable from "../PatientsTable";
import axios from "axios";
const Page = () => {

  const [reviews, setReviews] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getReview = () => {
    axios
      .post("http://localhost/backend/web/all_patients.php")
      .then((response) => response.data)
      .then((json) => {
        setReviews(json);
        console.log(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    setLoading(true);
    getReview();
  }, []);




  const [patients, setPatients] = useState([
    {
      id: "1",
      img: "https://th.bing.com/th/id/OIP.8EE42TOHDLaxi3CxwgFulAHaGf?pid=ImgDet&w=920&h=806&rs=1",
      name: "John Doe",
      email: "john.doe@gmail.com",
      lastAppointment: { doctor: "Ali", date: "30/3" },
      answered: true,
    },
    {
      id: "2",
      img: "https://th.bing.com/th/id/OIP.8EE42TOHDLaxi3CxwgFulAHaGf?pid=ImgDet&w=920&h=806&rs=1",
      name: "John Doe",
      email: "john.doe@gmail.com",
      lastAppointment: { doctor: "Ali", date: "30/3" },
      answered: true,
    },
    {
      id: "3",
      img: "https://th.bing.com/th/id/OIP.8EE42TOHDLaxi3CxwgFulAHaGf?pid=ImgDet&w=920&h=806&rs=1",
      name: "John Doe",
      email: "john.doe@gmail.com",
      lastAppointment: { doctor: "Ali", date: "30/3" },
      answered: false,
    },
  ]);
  // console.log(patients);
  const [select, setSelect] = useState(false);

  const [sort, setSort] = useState("id");

  const columns = ["Patient", "phone number", "History"];

  const [checked, setChecked] = useState([]);

  const sortOptions = ["id", "name"];

  return (
    <div>
      <h3>All Patients</h3>
      <Sorting
        rows={reviews}
        setRows={setReviews}
        select={select}
        setSelect={setSelect}
        setSort={setSort}
        checked={checked}
        options={sortOptions}
      />
      <PatientsTable
        rows={reviews}
        columns={columns}
        setRows={setReviews}
        sort={sort}
        select={select}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
};

export default Page;
