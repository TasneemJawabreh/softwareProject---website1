import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import DTable from "../components/DoctorTable";
import axios from "axios";
const DoctorTable = () => {
  const { DoctorId } = state || {};
  const [doctors, setDoctors] = useState([]);
  const { state } = useLocation();
  const [isLoading, setLoading] = useState(false);

  const [rows, setRows] = useState([]);
  console.log(DoctorId);
  var Data = {
    id: DoctorId,
  };

  const getDoctors = () => {
    axios
      .post("http://localhost/backend/web/app_doctor.php", Data)
      .then((response) => response.data)
      .then((json) => {
        setDoctors(json);
        //   console.log(json);
        console.log("gggg");
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    setLoading(true);

    getDoctors();
  }, []);

  console.log(doctors);
  const doctorName = "Ali";

  // const rows = [
  //   {
  //     id: "1",
  //     date: "20/3",
  //     time: "11:10",
  //     status: true,
  //     patientName: "john",
  //   },
  //   {
  //     id: "1",
  //     date: "20/3",
  //     time: "11:10",
  //     status: false,
  //     patientName: "",
  //   },
  // ];
  const columns = ["Date", "Time", "Status", "Patient"];

  return (
    <div>
      <DTable columns={columns} rows={doctors} doctorName={doctorName} />
    </div>
  );
};

export default DoctorTable;
