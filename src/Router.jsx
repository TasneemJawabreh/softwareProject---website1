import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./views/Admin";
import Secretary from "./views/Secretary";

import Appointments from "./views/Appointments";
import Clinics from "./views/Clinics";
import Dashboard from "./views/Dashboard";
import Doctors from "./views/Doctors";
import Labs from "./views/Labs";
import Patients from "./views/Patients";
import Rating from "./views/Rating";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import TodayAppointments from "./views/TodayAppointments";
import DoctorTable from "./views/DoctorTable";
import PatientHistory from "./views/PatientHistory";
import Lab from "./views/Lab";
import LabPage from "./components/LabPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignUp />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route element={<Admin />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clinics" element={<Clinics />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/doctorTable" element={<DoctorTable />} />
          <Route path="/patientHistory" element={<PatientHistory />} />
          <Route path="/rating" element={<Rating />} />
        </Route>
        <Route element={<Secretary />}>
          <Route path="/today" element={<TodayAppointments />} />
          <Route path="/sappointments" element={<Appointments />} />
        </Route>
        <Route element={<Lab />}>
          <Route path="/lab" element={<LabPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
