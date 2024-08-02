import React from "react";
import "./style.scss";
import { props as AppProps } from "./types";

const index = ({ lineclass, headerclass, text }: AppProps) => {
  return (
    <div className="">
      <h2 className={headerclass}>{text}</h2>
      <div className={lineclass}></div>
    </div>
  );
};

export default index;
