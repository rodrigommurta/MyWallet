import React, { Component } from "react";
import {formatData} from '../../Help/FormataDados'

import M from "materialize-css";


class Relato extends Component {
  STYLE = {
    //border: "1px solid red",
    borderRadius: '2px',
    //backgroundColor: "#C0C0C0",
    padding: "10px",
    marginBottom: "10px",
    minHeight: '100px',
    color: '#000000'
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
      <div className="card" style={{background: '#A9A9A9'}}>
        <div className="card-head white-text" style={{...STYLE_HEAD_CARD,background}
          }>
          {registro.tipo}
        </div>

        <div className="container" style={this.STYLE} className="card-content white-text col s4" >
          <div className="row">
            
            <div className="col-sm-6 col-md-4" style={{STYLE_TEXT}}>{registro.categoria} </div>
            <div className="col-sm-6 col-md-4" style={{STYLE_TEXT}}>R${registro.valor} </div>
            <div className="col-sm-6 col-md-4" style={{STYLE_TEXT}}>{formatData(registro.data)}</div>
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
