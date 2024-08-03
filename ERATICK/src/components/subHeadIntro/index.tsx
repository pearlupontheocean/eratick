import React from "react";
import { props as AppProps } from "./types";

const index = ({ text, color }: AppProps) => {
  return (
    <div style={{ color: color }}>
      <p>{text}</p>
    </div>
  );
};

export default index;
