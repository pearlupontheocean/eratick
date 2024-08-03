import React from "react";
import { props as AppProps } from "./types";
import "./style.scss";

const index = ({ id, title, figure, color }: AppProps) => {
  return (
    <div className="card" key={id} style={{ backgroundColor: color }}>
      <div className="figure">{figure}</div>
      <div className="title"> {title}</div>
    </div>
  );
};

export default index;
