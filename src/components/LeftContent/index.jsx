import React, { Component } from "react";
import { Link } from "react-router-dom";
import Style from "./styles.module.css";

export default class LeftContent extends Component {
  render() {
    return (
      <div className={Style.leftContent}>
        <h1 className={Style.title}>Clinics</h1>
        <p className={Style.desc}>
          We are a leading provider of medical Technologies for patients we
          provide a complete system that will help you to book appointments with
          your favorite doctor and give your feedback.
        </p>
        <div className={Style.container}>
          <p className={Style.copyright}>© 2022 All rights reserved. www.clinics.ps</p>
          <div className={Style.termPrivacy}>
            <Link className={Style.link}>Term</Link>
            <Link className={Style.link}>Privacy</Link>
          </div>
        </div>
      </div>
    );
  }
}
