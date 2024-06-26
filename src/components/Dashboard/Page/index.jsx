import React, { useContext } from "react";
import { useState, useEffect } from "react";
import MyChart from "../../Chart";
import TodayTable from "../../Today";
import MyCard from "../Card";
import Style from "./styles.module.css";
import axios from "axios";
const Page = () => {
  const cards = [
    {
      icon: <i class="bx bx-calendar"></i>,
      title: "all appointments",
      // number: "0",
      to: "/appointments",
    },
    {
      icon: <i class="bx bxs-group"></i>,
      title: "doctors",
      // number: "24",
      to: "/doctors",
    },
    {
      icon: <i class="bx bxs-user"></i>,
      title: "patients",
      // number: "4",
      to: "/patients",
    },
  ];



  const [isLoading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);
  const getDoctors = () => {
    axios
      .post("http://localhost/backend/web/today_app.php")
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


  const getx = () => {
    axios
      .post("http://localhost/backend/web/clinics_income.php")
      .then((response) => response.data)
      .then((json) => {
        setX(json);
        console.log(json);
        //  console.log("gggg");
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    setLoading(true);

    getx();
  }, []);


  const getY = () => {
    axios
      .post("http://localhost/backend/web/income.php")
      .then((response) => response.data)
      .then((json) => {
        setY(json);
        console.log(json);
        //  console.log("gggg");
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    setLoading(true);

    getY();
  }, []);

  const chart = {
    months: ["clinic1", "clinic2", "clinic3", "clinic4", "clinic5", "clinic6"],
    income: [30000, 56000, 50000, 78900, 40000, 45000],
  };

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
      time: "12:00 am",
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
      time: "12:00 am",
    },
  ]);

  const columns = ["Time", "Patient", "Doctor"];

  return (
    <div>
      <div className={Style.row}>
        {cards.map((item) => {
          return <MyCard {...item} />;
        })}
      </div>

      <div className={Style.child}>
        <TodayTable rows={rows} columns={columns} />
      </div>
      <div className={Style.child}>
        <MyChart x={x} y={y} />
      </div>
    </div>
  );
};

export default Page;
