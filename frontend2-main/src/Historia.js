import React from 'react';
import { Link } from 'react-router-dom';
import  Dashboard  from "./Dashboard"
import { Route } from 'react-router-dom';

const Historia = () =>{
  return (
        
    <div>
      <Dashboard/>
       <h2>Wasdkasdasd</h2>
    </div>

  );
}

  export default Historia;

  <Route exact path="/Historia" element={<Historia/>} />