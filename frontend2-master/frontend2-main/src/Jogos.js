import React from 'react';
import { Link } from 'react-router-dom';
import  Dashboard  from "./Dashboard";
import { Route } from 'react-router-dom';
const Jogos = () =>{
    
    return (
        
      <div>
        <Dashboard/>
        <h1>Página Inicial</h1>
      </div>
    );
  }
  
  export default Jogos;

  <Route exact path="/Jogos" element={<Jogos/>} />