import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'


export default function App({children}){

  
    return (
      <div style={ {minHeight:"100%", position: "relative", width:"100%"}}>
        <Header />
        <div>
          {children}
        </div>
        <Footer />
      </div> 
    );
  
}
