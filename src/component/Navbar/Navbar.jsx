
import './Navbar.css'

import { useState } from "react";
import {Link}  from 'react-router-dom';



const Navbar = () => {
 const [page,setPage]=useState("Home");


  return (
    <div className='navbar'>
          
            <h1  className='nav-page' onClick={() => {setPage("Home")}}>
            <Link style={{textDecoration:"none"}} to='/'><h3> Home </h3></Link> {page==="Home"?<hr/> :<></> }</h1>
      
      <ul className='nav-page'>
        
        <li onClick={() => {setPage("Information")}}>
            <Link style={{textDecoration:"none"}} to='/Information'><h3>  Information</h3> </Link> {page==="Information"?<hr/> :<></> }</li>
      
        <li onClick={() => {setPage("Start")}}>
            <Link style={{textDecoration:"none"}} to='/Start'> <h3> Start </h3></Link> {page==="Start"?<hr/> :<></> }</li>
      
        <li onClick={() => {setPage("Result")}}>
            <Link style={{textDecoration:"none"}} to='/Result'><h3>  Result</h3> </Link> {page==="Result"?<hr/> :<></> }</li>
        
      </ul>
      
      <div className='nav-login'>
          <Link to='/login'><button>login </button></Link>
      
  
      </div>
  
      
    </div>
  );
}

export default Navbar;
