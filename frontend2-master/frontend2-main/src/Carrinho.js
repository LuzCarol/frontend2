import React from 'react';
import { Link } from 'react-router-dom';
import  Dashboard  from "./Dashboard"
import { Route } from 'react-router-dom';
import "./Carrinho.css"

const Carrinho = () =>{
    
    return (
        
      <div> 
        <Dashboard/>
      </div>

    );
  }

  export default Carrinho;
  <Route exact path="/Carrinho" element={<Carrinho/>} />