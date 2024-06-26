import React from "react";
import LabPage from "../components/LabPage";
import SideNav from "../components/SideNav";

const Lab = () => {
  const menuItem = [
    {
      path: "/lab",
      name: "Send File",
      icon: <i class="bx bx-grid-alt"></i>,
    },
  ];

  const profile = "Lab Profile";
  return (
    <div style={{ display: "flex" }}>
      <SideNav menuItem={menuItem} profile={profile} />
      {/* <Outlet /> */}
    </div>
  );
};

export default Lab;
