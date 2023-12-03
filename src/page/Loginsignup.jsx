import React from 'react';
import "./styles/login.css"


const Loginsignup = () => {
  return (
    <div className='Loginsignup'>
     <div className="Loginsignup-container"> 
      <h1>sign up</h1>
      <div className="Loginsignup-fields">
        <input type="text" placeholder='your name'/>
        <input type="email" placeholder='your email'/>
        <input type="password" placeholder='password'/>
      </div>
      <button>continue</button>
      <p className='Loginsignup-Login' > 
      already have an account ? <span>login here</span>
      </p>
      <div className="Loginsignup-agree">
        <input type="checkbox" name='' id='' />
        <p> by continuing , I agree to te terms of use & privacy policy</p>
      </div>
    </div>
    </div> 
  );
}

export default Loginsignup;
