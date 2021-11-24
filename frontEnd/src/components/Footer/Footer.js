import React from "react";
import "./index.css";

// var style = {
//   position: "fixed",
//   bottom: "0px",
//   width: "100%",
// };

var phantom = {
  //display: "block",
  padding: "30px",
  height: "100px",
  width: "100%",
  marginTop: "30px",
};

function Footer({ children }) {
  return (
    <div>
      <div style={phantom} />
      <div className="black-white-text">
        Trabalho TEC Web - 2/2021 Puc MINAS
        <br />
        Autores: Gabriel Paixão, João Cadar, Leonardo Oliveira, Nicole Bertolini, Rodrigo Murta
      </div>
    </div>
  );
}

export default Footer;
