import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./Login.css"

const Login = () => {
    const [loginData, setloginData]=useState({email:'',password:''});

    const handleChange = event =>{
        const {name, value} = event.target;
        setloginData({...loginData,[name]: value});
    };
    const handleSubmit = event =>{
        event.preventDefault();
        console.log(loginData.email, loginData.password);
    };
    const navigate = useNavigate();
  return (
    <div>

<div className="login-page">
        <div className="form">
          <div className="login">
            <div className="login-header">
            <h1>Login</h1>
            </div>
            <form onSubmit={handleSubmit}>
               <div className="txt"> <label>
                    Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="email" name="email"  placeholder="Enter your Email"  value={loginData.email} onChange={handleChange}/><br/><br/>
                </label></div>
                <div className="txt">
                <label>
                    Password&nbsp;&nbsp;
                    <input type="password" name="password"  placeholder='  Enter your Password'  value={loginData.password} onChange={handleChange}/><br/><br/>
                </label>
                </div>
                <button type='submit' onClick={()=>navigate('Home')}>Login</button>
            </form>
        </div>
            </div>
            </div>
    </div>
  )
}

export default Login