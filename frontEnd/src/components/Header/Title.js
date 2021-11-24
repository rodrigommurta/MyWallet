import React from "react";
//import {logo1}  from '../../Help/Complementos'
import logo from "./teste.png";

export default function Title() {
  return (
    <div style={STYLE}>
      <img
        src={logo}
        width="30%"
        alt="Me Conta Sua História"
        border="1px solid green"
      />
    </div>
  );
}

const STYLE = {
  //border: '1px solid red',
  display: "flex",
  alignItems: "flex-justify",
  width: "50%",
  height: "70%"
};
