import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import HistoryTable from "../components/HistoryTable";
import axios from "axios";
const PatientHistory = () => {
  const { state } = useLocation();
  const { PatientId } = state || {};

  const [isLoading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  console.log(PatientId);
  var Data = {
    id: PatientId,
  };

  const getDoctors = () => {
    axios
      .post("http://localhost/backend/web/history.php", Data)
      .then((response) => response.data)
      .then((json) => {
        setRows(json);
        console.log(json);
        console.log("gggg");
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    setLoading(true);

    getDoctors();
  }, []);
  console.log(PatientId);
  console.log("jjjjjj");
  const patientName = "Ali";

  // const rows = [
  //   {
  //     id: "1",
  //     question: "Past surgeries & hospitalizations",
  //     answers: ["aaa", "bbbbb"],
  //   },
  //   {
  //     id: "2",
  //     question: "Chronic diseases",
  //     answers: ["aaa", "bbbbb"],
  //   },
  //   {
  //     id: "3",
  //     question: "Kind of taken medication",
  //     answers: ["aaa", "bbbbb"],
  //   },

  //   {
  //     id: "5",
  //     question: "Diseases or medical problems that run in family",
  //     answers: ["aaa", "bbbbb"],
  //   },
  //   {
  //     id: "4",
  //     question: "Smoking",
  //     answers: ["no"],
  //   },
  // ];

  const columns = ["question", "answers"];

  return (
    <HistoryTable columns={columns} rows={rows} patientName={patientName} />
  );
};

export default PatientHistory;
