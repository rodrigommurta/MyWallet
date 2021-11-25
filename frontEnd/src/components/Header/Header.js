import React from 'react'
import Menu from './Menu'
import CadastroButton from './CadastroButton'
import Title from './Title'
import MyLinks from '../../Help/Links';
import logo from "./teste.png";


export default function Header() {
    return (
        <div className="contaniner">
            <div style={STYLE_1} className=" gray">
                <div className="" style={STYLE_2}>
                <div style={STYLE_3}>
                    <img
                        src={logo}
                        width="30%"
                        alt="Logo MyWallet"
                        border="1px solid green"
                    />
                </div>
                <h1 style={{color: "white"}}>
                MyWallet - Gestão Financeira
                </h1>
                
 
                </div>
            </div>
        </div>
    )
}

const STYLE_1 = {
    //position: 'fixed',
    //top: '0px',
    //widht: '100%',
    padding:'25px',
    height: '150px',
    marginBottom: '15px',
    //border: '1px solid black',
    background: '#5F9EA0',
    //zIndex: 100
}

const STYLE_2 = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
}

const STYLE_3 = {
    //border: '1px solid red',
    display: "flex",
    alignItems: "flex-justify",
    width: "30%",
    //height: "30%"
  };