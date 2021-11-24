import React, { Component } from "react";
import {formatData} from '../../Help/FormataDados'

import M from "materialize-css";


class Relato extends Component {
  STYLE = {
    //border: "1px solid red",
    borderRadius: '10px',
    backgroundColor: "#A9A9A9",
    padding: "10px",
    marginBottom: "10px",
    minHeight: '100px'
  };

  constructor(props) {
    super(props);
    this.state = {
      TextLengh: 300,
      modalText: false,
    };
  }

  render() {
    const { registro, background} = this.props;

    return (
      <div className="card" style={{background:"#A9A9A9"}}>
        <div className="card-head white-text" style={{...STYLE_HEAD_CARD,background}
          }>
          {registro.name}
        </div>

        <div className="container" style={this.STYLE} className="card-content white-text col s4" >
          <div className="row">
            
            <div className="col-sm-4 col-md-3" style={{STYLE_TEXT}}>R${registro.valorObjetivo} </div>
            <div className="col-sm-4 col-md-3" style={{STYLE_TEXT}}>R${registro.valorPoupado} </div>
            <div className="col-sm-4 col-md-3" style={{STYLE_TEXT}}>{registro.valorPoupado/registro.valorObjetivo}%</div>
            <div className="col-sm-4 col-md-3" style={{STYLE_TEXT}}>{formatData(registro.dataCriacao)}</div>
            <div className="col-sm-4 col-md-3" style={{STYLE_TEXT}}>{formatData(registro.dataFim)}</div>
            <div>
              {registro.descricao}
            </div>


          </div>

        </div>

      </div>
    );
  }
}

const STYLE_HEAD_CARD = {
    fontSize: "1.2em", 
    background: "#00000",
    padding: "2px"
  }

  const STYLE_TEXT = {
    display: "flex",
    justifyContent: "flex-start",
    aligItems: "flex-start",
  };

export default Relato;
