import React from "react";
import "./style.scss";
import { FaTicketAlt } from "react-icons/fa";
import { props as AppProps } from "./types";
const index = ({ title, desc }: AppProps) => {
  return (
    <div className="icon-text-box">
      <div className="icon-circle">
        <FaTicketAlt fontSize="25px" color="white" />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default index;
