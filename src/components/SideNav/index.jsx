import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Style from "./styles.module.css";

const SideNav = ({ menuItem, profile }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate()

  return (
    <>
      <div
        className={Style.sidebar}
        style={isOpen ? { width: "21%" } : { width: "5.5%" }}
      >
        <div className={Style.logoDetails}>
          <div className={Style.logoContainer}>
            <img src="assets/images/logo.png" alt="logo" />
          </div>
          {isOpen && <span className={Style.logoName}>Clinics Website</span>}
        </div>
        <ul className={Style.navLinks}>
          {menuItem.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  href="#"
                  to={item.path}
                  activeclassName="active"
                  className={Style.link}
                >
                  {item.icon}
                  {isOpen && (
                    <span className={Style.linkName}>{item.name}</span>
                  )}
                </NavLink>
              </li>
            );
          })}
          <li>
            <div
              className={Style.profileDetails}
              style={isOpen ? { width: "21%" } : { width: "5.5%" }}
            >
              <div className={Style.profileContent}>
                {/* <img src="image/profile.jpg" /> */}
              </div>
              {isOpen && (
                <div>
                  <div className={Style.profileName}>{profile}</div>
                  <div className={Style.job}>log out</div>
                </div>
              )}
              <div onClick={()=>navigate('/signin')}>
                <i class="bx bx-log-out"></i>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <section
        style={
          isOpen
            ? { width: "79%", left: "21%" }
            : { width: "95.5%", left: "5.5%" }
        }
        className={Style.homeSection}
      >
        <div className={Style.homeContent}>
          <i class="bx bx-menu" onClick={toggle}></i>
        </div>
        <div className={Style.section}>
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default SideNav;
