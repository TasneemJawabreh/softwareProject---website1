import React from "react";
import { Link } from "react-router-dom";
import Style from "./styles.module.css";

const MyCard = ({icon,title,number,to}) => {
  return (
    <Link to={to} className={Style.link}>
      <div className={Style.card}>
        <div className={Style.cardIcon}>
          {icon}
        </div>
        <div className={Style.cardText}>
          <h2 className={Style.cardTitle}>{title}</h2>
          <span className={Style.number}>{number}</span>
        </div>
      </div>
    </Link>
  );
};

export default MyCard;
