(this["webpackJsonpreact-client"]=this["webpackJsonpreact-client"]||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/teste.2c14a07d.png"},45:function(e,t,a){e.exports=a(86)},52:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c),s=(a(50),a(51),a(52),a(15));a(57);function i(e){var t=e.destino,a=e.texto,n=e.background,c=e.width,o=c||"10em";return console.log(c,o),r.a.createElement("div",{className:"col s12 m6",style:{padding:"2px"}},r.a.createElement(s.b,{to:"/"+t},r.a.createElement("button",{className:"waves-effect darken-1 btn",style:{color:"white",fontSize:"1em",height:"4em",lineHeight:"1.5",width:o,background:n}},a)))}var l=a(17),u=a.n(l);function m(){return r.a.createElement("div",{className:"contaniner"},r.a.createElement("div",{style:d,className:" gray"},r.a.createElement("div",{className:"",style:p},r.a.createElement("div",{style:v},r.a.createElement("img",{src:u.a,width:"30%",alt:"Logo MyWallet",border:"1px solid green"})),r.a.createElement("h1",{style:{color:"white"}},"MyWallet - Gest\xe3o Financeira"))))}var d={padding:"25px",height:"150px",marginBottom:"15px",background:"#5F9EA0"},p={display:"flex",justifyContent:"space-around",alignItems:"flex-start"},v={display:"flex",alignItems:"flex-justify",width:"30%"},h=(a(58),{padding:"30px",height:"100px",width:"100%",marginTop:"30px"});var f=function(e){return e.children,r.a.createElement("div",null,r.a.createElement("div",{style:h}),r.a.createElement("div",{className:"black-white-text"},"Trabalho TEC Web - 2/2021 Puc MINAS",r.a.createElement("br",null),"Autores: Gabriel Paix\xe3o, Jo\xe3o Cadar, Leonardo Oliveira, Nicole Bertolini, Rodrigo Murta"))};function g(e){var t=e.children;return r.a.createElement("div",{style:{minHeight:"100%",position:"relative",width:"100%"}},r.a.createElement(m,null),r.a.createElement("div",null,t),r.a.createElement(f,null))}var E=a(3),b=a(42),y=a(43),x=a(1),w=a.n(x),k=a(2),O=a(4),j=a(5),N=a(6),S=a(7),T=a(10),R=a(12),D=function(e){var t=String(e),a=t.substr(0,4),n=t.substr(5,2),r=t.substr(8,2);return"".concat(r,"/").concat(n,"/").concat(a)},C=a(14),L=a.n(C),A=function(e){Object(S.a)(a,e);var t=Object(N.a)(a);function a(e){var n;return Object(O.a)(this,a),(n=t.call(this,e)).STYLE={borderRadius:"2px",padding:"10px",marginBottom:"10px",minHeight:"100px",color:"#000000"},n.state={TextLengh:300,modalText:!1},n}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.registro,a=e.background;return r.a.createElement("div",{className:"card",style:{background:"#A9A9A9"}},r.a.createElement("div",{className:"card-head white-text",style:Object(R.a)({},Y,{background:a})},t.tipo),r.a.createElement("div",Object(T.a)({className:"container",style:this.STYLE},"className","card-content white-text col s4"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6 col-md-4",style:{STYLE_TEXT:P}},t.categoria," "),r.a.createElement("div",{className:"col-sm-6 col-md-4",style:{STYLE_TEXT:P}},"R$",t.valor," "),r.a.createElement("div",{className:"col-sm-6 col-md-4",style:{STYLE_TEXT:P}},D(t.data)),r.a.createElement("div",null,t.descricao))))}}]),a}(n.Component),Y={fontSize:"1.2em",background:"#00000",padding:"2px"},P={display:"flex",justifyContent:"flex-start",aligItems:"flex-start"},F=A,I=function(e){Object(S.a)(a,e);var t=Object(N.a)(a);function a(e){var n;return Object(O.a)(this,a),(n=t.call(this,e)).state={STYLE:{width:e.width,with:"100%",margin:"5px",padding:"5px"},STYLE_TEXT:{}},n}return Object(j.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.props.relatos),0===this.props.registros.length?r.a.createElement("div",null,"Nenhum registro realizado!"):r.a.createElement("div",{style:this.state.STYLE},this.props.registros.map((function(t,a){var n="Receita"===t.tipo?"#3CB371":"#FA8072",c=t.data;return r.a.createElement("div",{key:a,style:e.state.STYLE_TEXT},r.a.createElement(F,{background:n,registro:t,Data:c}))})))}}]),a}(n.Component),M=a(19),z=a.n(M),B=z.a.create({baseURL:"api/Entradas"}),X=function(){var e=Object(k.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.post("/cadastro",t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(k.a)(w.a.mark((function e(){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.get("/entradas");case 2:return t=e.sent,a=t.data.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function q(e){var t=e.texto,a=e.value,n=e.background;return r.a.createElement("div",{style:Object(R.a)({},$,{background:null!==n&&void 0!==n?n:"#000000"}),className:"col s6 m6 card darken-4"},r.a.createElement("div",{style:{fontSize:"1em",color:"white"}},t),r.a.createElement("span",{style:{fontSize:"1.2em",color:"white"}},a))}var $={width:"30%",height:"90px",padding:"10px",margin:"10px",fontSize:"1em"};function H(){return r.a.createElement("div",{className:"row",style:{padding:"10px"}},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(i,{destino:"home",texto:"Entradas",background:"#A9A9A9",width:"10em"}),r.a.createElement(i,{destino:"entradas",texto:"+",background:"#DDA301",width:"3em"})),r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(i,{destino:"metas",texto:"Metas",background:"#A9A9A9",width:"10em"}),r.a.createElement(i,{destino:"meta",texto:"+",background:"#DDA301",width:"3em"})))}var V=function(e){Object(S.a)(a,e);var t=Object(N.a)(a);function a(e){var n;return Object(O.a)(this,a),(n=t.call(this,e)).STYLE={padding:"5px",margin:"5px"},n.state={Registros:[],RegistrosResumo:[],filters:[],Receita:0,Despesa:0},n}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=Object(k.a)(w.a.mark((function e(){var t,a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_();case 3:t=e.sent,console.log(t),[{filterName:"generoPessoa",value:""},{filterName:"ufRelato",value:""}],a=t.reduce((function(e,t){return e+("Receita"==t.tipo?t.valor:0)}),0),n=t.reduce((function(e,t){return e+("Despesa"==t.tipo?t.valor:0)}),0),this.setState({Registros:t}),this.setState({RegistrosResumo:t}),this.setState({Receita:a}),this.setState({Despesa:n}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log("Deu ruim");case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"Filtered",value:function(e,t){var a=Object(y.a)(this.state.filters);a.forEach((function(a){return a.filterName===e&&(a.value=t),a})),this.setState({filters:a}),this.filtraValuesToShow()}},{key:"filtraValuesToShow",value:function(){var e=this.state,t=e.filters,a=e.Registros.filter((function(e){var a,n=!0,r=Object(b.a)(t);try{for(r.s();!(a=r.n()).done;){var c=a.value;c.value&&e[c.filterName]!==c.value&&(n=!1)}}catch(o){r.e(o)}finally{r.f()}return n}));this.setState({RelatosResumo:a})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container",style:J},r.a.createElement("div",{style:this.STYLE},r.a.createElement(H,null),r.a.createElement("div",{style:U,className:"row"},r.a.createElement(q,{value:"R$"+this.state.Receita,texto:"Receita Total",background:"#3CB371"}),r.a.createElement(q,{value:"R$"+this.state.Despesa,texto:"Despesa Total",background:"#FA8072"}),r.a.createElement(q,{value:"R$"+(this.state.Receita-this.state.Despesa),texto:"Saldo",background:this.state.Receita-this.state.Despesa>=0?"#3CB371":"#FA8072"})),r.a.createElement(I,{registros:this.state.RegistrosResumo,width:"100%",TamanoTexto:300})))}}]),a}(n.Component),U={display:"flex",justifyContent:"flex-start",aligItems:"flex-start"},J={background:"#B0E0E6",padding:"10px"},W=function(e){Object(S.a)(a,e);var t=Object(N.a)(a);function a(e){var n;return Object(O.a)(this,a),(n=t.call(this,e)).STYLE={borderRadius:"10px",backgroundColor:"#A9A9A9",padding:"10px",marginBottom:"10px",minHeight:"100px"},n.state={TextLengh:300,modalText:!1},n}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.registro,a=e.background;return r.a.createElement("div",{className:"card",style:{background:"#A9A9A9"}},r.a.createElement("div",{className:"card-head white-text",style:Object(R.a)({},G,{background:a})},t.name),r.a.createElement("div",Object(T.a)({className:"container",style:this.STYLE},"className","card-content white-text col s4"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4 col-md-3",style:{STYLE_TEXT:K}},"R$",t.valorObjetivo," "),r.a.createElement("div",{className:"col-sm-4 col-md-3",style:{STYLE_TEXT:K}},"R$",t.valorPoupado," "),r.a.createElement("div",{className:"col-sm-4 col-md-3",style:{STYLE_TEXT:K}},t.valorPoupado/t.valorObjetivo,"%"),r.a.createElement("div",{className:"col-sm-4 col-md-3",style:{STYLE_TEXT:K}},D(t.dataCriacao)),r.a.createElement("div",{className:"col-sm-4 col-md-3",style:{STYLE_TEXT:K}},D(t.dataFim)),r.a.createElement("div",null,t.descricao))))}}]),a}(n.Component),G={fontSize:"1.2em",background:"#00000",padding:"2px"},K={display:"flex",justifyContent:"flex-start",aligItems:"flex-start"},Q=W,Z=z.a.create({baseURL:"api/Metas"}),ee=function(){var e=Object(k.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.post("/cadastro",t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=Object(k.a)(w.a.mark((function e(){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.get("/metas");case 2:return t=e.sent,a=t.data.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(e){Object(S.a)(a,e);var t=Object(N.a)(a);function a(e){var n;return Object(O.a)(this,a),(n=t.call(this,e)).STYLE={padding:"5px",margin:"5px"},n.state={Registros:[],RegistrosResumo:[],filters:[],Receita:0,Despesa:0},n}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=Object(k.a)(w.a.mark((function e(){var t,a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te();case 3:t=e.sent,[{filterName:"generoPessoa",value:""},{filterName:"ufRelato",value:""}],a=t.reduce((function(e,t){return e+("Receita"==t.tipo?t.valor:0)}),0),n=t.reduce((function(e,t){return e+("Despesa"==t.tipo?t.valor:0)}),0),this.setState({Registros:t}),this.setState({RegistrosResumo:t}),this.setState({Receita:a}),this.setState({Despesa:n}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("Deu ruim");case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container",style:{background:"#B0E0E6",padding:"10px"}},r.a.createElement(H,null),r.a.createElement("div",{style:this.STYLE},0===this.state.Registros.length?r.a.createElement("div",null,"Nenhum Registro realizado!"):r.a.createElement("div",{style:ne},this.state.Registros.map((function(t,a){return r.a.createElement("div",{key:a,style:e.state.STYLE_TEXT},r.a.createElement(Q,{background:"#3CB371",registro:t,Data:"dataFormat"}))})))))}}]),a}(n.Component),ne={with:"100%",margin:"5px",padding:"5px"},re=["Farmacia","Supermecado","Divers\xe3o","Aluguel","Sal\xe1rio","Rendimentos","Apostas","Outros"],ce=(a(37),function(e){Object(S.a)(a,e);var t=Object(N.a)(a);function a(e){var n;return Object(O.a)(this,a),(n=t.call(this,e)).customStyles={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},n.afterOpenModal=function(){},n.cadastrarEntrada=function(){var e=Object(k.a)(w.a.mark((function e(t){var a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("Entrei aqui"),a={tipo:n.state.tipo,data:n.state.data,valor:n.state.valor,descricao:n.state.descricao,categoria:n.state.categoria},console.log(a),e.prev=4,e.next=7,X(a);case 7:r=e.sent,console.log(r.status),window.location="/",e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log("N\xe3o rolou");case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),n.state={tipo:"Despesa",data:Date.now(),valor:0,descricao:"",categoria:"",categoriaOp:[]},n}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=Object(k.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:L.a.AutoInit();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(k.a)(w.a.mark((function e(t,a){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"setProperty",value:function(e,t){t.target?this.setState(Object(T.a)({},e,t.target.value)):t.value?this.setState(Object(T.a)({},e,t.value)):console.log("Nenhum atributo cadastrado")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("h5",{style:{margin:"15px",padding:"1px",textSize:"2em"}},"Entrada"),r.a.createElement("div",{style:{padding:"15px"}},r.a.createElement("form",{onSubmit:function(t){return e.cadastrarEntrada(t)}},r.a.createElement("div",{style:this.state.STYLE,className:"row"},r.a.createElement("label",{className:"col-sm-6 col-md-4"},"Tipo",r.a.createElement("select",{value:this.state.tipo,onChange:function(t){return e.setProperty("tipo",t)},name:"tipo"},r.a.createElement("option",{key:"Despesa",value:"Despesa"},"Despesa"),r.a.createElement("option",{key:"Receita",value:"Receita"},"Receita"))),r.a.createElement("label",{className:"col-sm-6 col-md-4"},"Categoria:",r.a.createElement("select",{required:!0,value:this.state.categoria,onChange:function(t){return e.setProperty("categoria",t)},name:"categoria"},r.a.createElement("option",{disabled:!0,value:""},"Selecionar"),re.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("label",{className:"col-sm-6 col-md-4"},"Valor R$ :",r.a.createElement("input",{required:!0,type:"number",min:"0",name:"valor",value:this.state.valor,onChange:function(t){return e.setProperty("valor",t)}})),r.a.createElement("label",{className:"col-sm-6 col-md-4"},"Data:",r.a.createElement("input",{required:!0,type:"date",name:"data",value:this.state.data,onChange:function(t){return e.setProperty("data",t)}})),r.a.createElement("label",{className:"col-sm-8 col-md-8"},"Descri\xe7\xe3o:",r.a.createElement("input",{type:"text",name:"Descricao",value:this.state.descricao,onChange:function(t){return e.setProperty("descricao",t)}}))),r.a.createElement("button",{className:"waves-effect grey darken-1 btn",style:{fontSize:"0.9em",height:"5em",lineHeight:"2",width:"12em"}},r.a.createElement("input",{type:"submit",value:"Registrar"})))))}}]),a}(n.Component)),oe=function(e){Object(S.a)(a,e);var t=Object(N.a)(a);function a(e){var n;return Object(O.a)(this,a),(n=t.call(this,e)).load=Object(k.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),n.customStyles={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},n.afterOpenModal=function(){},n.cadastrarMeta=function(){var e=Object(k.a)(w.a.mark((function e(t){var a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("Entrei aqui"),a={name:n.state.name,dataCriacao:n.state.dataCriacao,dataFim:n.state.dataFim,valorObjetivo:n.state.valorObjetivo,valorPoupado:n.state.valorInicial,descricao:n.state.descricao,categoria:n.state.categoria},console.log(a),e.prev=4,e.next=7,ee(a);case 7:r=e.sent,console.log(r.status),window.location="/",e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log("N\xe3o rolou");case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),n.state={name:"",dataCriacao:Date.now(),dataFim:Date.now(),valorObjetivo:0,valorInicial:0,descricao:"",categoria:"",categoriaOp:[]},n.load(),n}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=Object(k.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:L.a.AutoInit();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(k.a)(w.a.mark((function e(t,a){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"setProperty",value:function(e,t){t.target?this.setState(Object(T.a)({},e,t.target.value)):t.value?this.setState(Object(T.a)({},e,t.value)):console.log("Nenhum atributo cadastrado")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("h5",{style:{margin:"15px",padding:"1px",textSize:"2em"}},"Entrada"),r.a.createElement("div",{style:{padding:"15px"}},r.a.createElement("form",{onSubmit:function(t){return e.cadastrarMeta(t)}},r.a.createElement("div",{style:this.state.STYLE,className:"row"},r.a.createElement("label",{className:"col-sm-6 col-md-4"},"Nome Meta:",r.a.createElement("input",{type:"text",name:"nome",value:this.state.name,onChange:function(t){return e.setProperty("name",t)}})),r.a.createElement("label",{className:"col-sm-6 col-md-4"},"Valor Objetivo R$ :",r.a.createElement("input",{required:!0,type:"number",min:"0",name:"valor",value:this.state.valorObjetivo,onChange:function(t){return e.setProperty("valorObjetivo",t)}})),r.a.createElement("label",{className:"col-sm-6 col-md-4"},"Valor Inicial R$ :",r.a.createElement("input",{required:!0,type:"number",min:"0",name:"valor",value:this.state.valorInicial,onChange:function(t){return e.setProperty("valorInicial",t)}})),r.a.createElement("label",{className:"col-sm-6 col-md-4"},"Categoria:",r.a.createElement("select",{required:!0,value:this.state.categoria,onChange:function(t){return e.setProperty("categoria",t)},name:"categoria"},r.a.createElement("option",{disabled:!0,value:""},"Selecionar"),re.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("label",{className:"col-sm-6 col-md-4"},"Data Inicio:",r.a.createElement("input",{required:!0,type:"date",name:"data",value:this.state.dataCriacao,onChange:function(t){return e.setProperty("dataCriacao",t)}})),r.a.createElement("label",{className:"col-sm-6 col-md-4"},"Data Fim:",r.a.createElement("input",{required:!0,type:"date",name:"data",value:this.state.dataFim,onChange:function(t){return e.setProperty("dataFim",t)}})),r.a.createElement("label",{className:"col-sm-8 col-md-8"},"Descri\xe7\xe3o:",r.a.createElement("input",{type:"text",name:"Descricao",value:this.state.descricao,onChange:function(t){return e.setProperty("descricao",t)}}))),r.a.createElement("button",{className:"waves-effect grey darken-1 btn",style:{fontSize:"0.9em",height:"5em",lineHeight:"2",width:"12em"}},r.a.createElement("input",{type:"submit",value:"Registrar"})))))}}]),a}(n.Component);o.a.render(r.a.createElement(s.a,null,r.a.createElement(g,null,r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/",component:V}),r.a.createElement(E.a,{exact:!0,path:"/home",component:V}),r.a.createElement(E.a,{path:"/metas",component:ae}),r.a.createElement(E.a,{path:"/entradas",component:ce}),r.a.createElement(E.a,{path:"/meta",component:oe})))),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.3cb472a2.chunk.js.map