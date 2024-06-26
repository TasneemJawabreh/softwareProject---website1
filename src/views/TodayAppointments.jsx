import React, { useState } from "react";
import SecretaryTable from "../components/Secretary/Table";

const TodayAppointments = () => {
  const [doctors, setDoctors] = useState([
    {
      id: "1",
      img: "https://mdbootstrap.com/img/new/avatars/8.jpg",
      name: "John Doe",
      email: "john.doe@gmail.com",
      imgPatient: "https://mdbootstrap.com/img/new/avatars/8.jpg",
      namePatient: "John Doe",
      emailPatient: "john.doe@gmail.com",
      time: "4:00",
      attend: true,
      paid: false,
    },
    {
      id: "2",
      img: "https://mdbootstrap.com/img/new/avatars/8.jpg",
      name: "John Doe",
      email: "john.doe@gmail.com",
      imgPatient: "https://mdbootstrap.com/img/new/avatars/8.jpg",
      namePatient: "John Doe",
      emailPatient: "john.doe@gmail.com",
      time: "4:00",
      attend: false,
      paid: true,
    },
    {
        id: "3",
        img: "https://mdbootstrap.com/img/new/avatars/8.jpg",
        name: "John Doe",
        email: "john.doe@gmail.com",
        imgPatient: "https://mdbootstrap.com/img/new/avatars/8.jpg",
        namePatient: "John Doe",
        emailPatient: "john.doe@gmail.com",
        time: "4:00",
        attend: false,
        paid: true,
      },
      {
        id: "4",
        img: "https://mdbootstrap.com/img/new/avatars/8.jpg",
        name: "John Doe",
        email: "john.doe@gmail.com",
        imgPatient: "https://mdbootstrap.com/img/new/avatars/8.jpg",
        namePatient: "John Doe",
        emailPatient: "john.doe@gmail.com",
        time: "4:00",
        attend: true,
        paid: true,
      },
  ]);


  const [select, setSelect] = useState(false);

  const [sort, setSort] = useState("id");

  const columns = ["Doctor", "Patient", "Time", "Attended", "Paid"];

  const [checked, setChecked] = useState([]);

  return (
    <div>
      <SecretaryTable
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

export default TodayAppointments;
