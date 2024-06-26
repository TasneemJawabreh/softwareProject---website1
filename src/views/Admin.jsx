import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";

const Admin = () => {
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <i class="bx bx-grid-alt"></i>,
    },
    {
      path: "/clinics",
      name: "clinics",
      icon: <i class="bx bx-home-heart"></i>,
    },
    {
      path: "/doctors",
      name: "Doctors",
      icon: <i class="bx bxs-user-account"></i>,
      subMenu: "",
    },
    {
      path: "/patients",
      name: "Patients",
      icon: <i class="bx bx-user"></i>,
    },
    {
      path: "/labs",
      name: "Labs",
      icon: <i class="bx bx-band-aid"></i>,
    },
    {
      path: "/appointments",
      name: "Appointments",
      icon: <i class="bx bx-calendar"></i>,
    },
  ];

  const profile = "Admin Profile"
  return (
    <div style={{ display: "flex" }}>
      <SideNav menuItem={menuItem} profile={profile}/>
      {/* <Outlet /> */}
    </div>
  );
};

export default Admin;
