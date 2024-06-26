import React, { useContext } from "react";
import { useState, useEffect } from "react";
import MyForm from "../Form";
import CTable from "../Table";
import axios from "axios";
const Page = () => {
  const columns = ["clinic", "location", " # of doctors", "rate", "specialty", " "];
  const [clinics, setClinics] = useState([]);
  const getDoctors = () => {
    axios
      .post("http://localhost/backend/web/clinics.php")
      .then((response) => response.data)
      .then((json) => {
        setClinics(json);
        console.log(json);
      })
      .catch((error) => console.error(error))

  };
  useEffect(() => {

    getDoctors();
  }, []);



  // const [clinics, setClinics] = useState([
  //   {
  //     id: "1",
  //     specialty: "Psychiatry",
  //     name: "Clinic1",
  //     img: "http://www.hcchospital.org/Uploads/files/HCCH%20Medical%20Clinic%20Front(1).jpg",
  //     doctors: 3,
  //     rate: 2.5,
  //     status: true,
  //     income: {
  //       avg: 4000,
  //       everyMonth: [
  //         { month: "jan", income: 3000 },
  //         { month: "feb", income: 4800 },
  //         { month: "mar", income: 3020 },
  //         { month: "mar", income: 2555 },
  //         { month: "april", income: 1566 },
  //         { month: "jun", income: 4788 },
  //         { month: "jul", income: 5000 },
  //       ],
  //     },
  //     location:"nablus"
  //   },
  //   {
  //     id: "2",
  //     specialty: "Psychiatry2",
  //     name: "clinic2",
  //     img: "http://www.hcchospital.org/Uploads/files/HCCH%20Medical%20Clinic%20Front(1).jpg",
  //     doctors: 2,
  //     rate: 3.5,
  //     status: true,
  //     income: 6000,
  //     income: {
  //       avg: 4000,
  //       everyMonth: [
  //         { month: "jan", income: 3000 },
  //         { month: "feb", income: 4800 },
  //         { month: "mar", income: 3020 },
  //         { month: "mar", income: 2555 },
  //         { month: "april", income: 1566 },
  //         { month: "jun", income: 4788 },
  //         { month: "jul", income: 5000 },
  //       ],
  //     },
  //     location:"nablus"

  //   },
  //   {
  //     id: "3",
  //     specialty: "Psychiatry3",
  //     name: "clinic3",
  //     img: "http://www.hcchospital.org/Uploads/files/HCCH%20Medical%20Clinic%20Front(1).jpg",
  //     doctors: 1,
  //     rate: 5,
  //     status: true,
  //     income: 6000,
  //     income: {
  //       avg: 4000,
  //       everyMonth: [
  //         { month: "jan", income: 3000 },
  //         { month: "feb", income: 4800 },
  //         { month: "mar", income: 3020 },
  //         { month: "mar", income: 2555 },
  //         { month: "april", income: 1566 },
  //         { month: "jun", income: 4788 },
  //         { month: "jul", income: 5000 },
  //       ],
  //     },
  //     location:"nablus"

  //   },
  //   {
  //     id: "4",
  //     specialty: "Psychiatry3",
  //     name: "clinic4",
  //     img: "https://static.bookinghealth.com/uploads/clinics/gallery/m/4498-1408-otr_Depositphotos_316360964_xl-2015-1.jpg",
  //     doctors: 8,
  //     rate: 4.5,
  //     status: false,
  //     income: {
  //       avg: 4000,
  //       everyMonth: [
  //         { month: "jan", income: 3000 },
  //         { month: "feb", income: 4800 },
  //         { month: "mar", income: 3020 },
  //         { month: "mar", income: 2555 },
  //         { month: "april", income: 1566 },
  //         { month: "jun", income: 4788 },
  //         { month: "jul", income: 5000 },
  //       ],
  //     },
  //     location:"nablus"

  //   },
  // ]);
  return (
    <div>
      <MyForm clinics={clinics} setClinics={setClinics} />
      <CTable columns={columns} clinics={clinics} setClinics={setClinics} />
    </div>
  );
};

export default Page;
