import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function CadastroButton({destino, texto, background, width}) {
  const w = width? width : "10em"
  console.log(width, w)
  return (
    <div className="col s12 m6" style={{padding: '2px'}}>
      <Link to={"/"+destino}>
        <button
          className="waves-effect darken-1 btn"
          style={{ color: 'white', fontSize: "1em", height:"4em", lineHeight: '1.5', width: w, background }}
        >
          {texto}
        </button>
      </Link>
    </div>
  );
}
