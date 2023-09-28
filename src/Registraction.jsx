import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Register.css"

const Registraction = () => {
    const [login,Setlogin]=useState({email:'',password:'',name:'',dob:'',female:'',male:''});
 
    const handleChange = event =>{
    const {name,value}= event.target;
    Setlogin({...login ,[name]:value});
    };
    const handleSubmit =event =>{
        event.preventDefault();
        console.log(login.email,login.password,login.name,login.dob,login.female,login.Male);
    };
    const navigate = useNavigate();
  return (
    <div>
         <div className="body">
            <div className="center">
                
            
            <form onSubmit={handleSubmit}>
                <h1>REGISTER</h1>
        <label>
            Name
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='text' name='name' placeholder="Enter your name" value={login.name} onChange={handleChange}/>
        </label><br/><br/>
        <label>
            Email
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='email' name='email' placeholder="Enter your Email" value={login.email} onChange={handleChange}/>
        </label><br/><br/>
        <label>
            Password
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='password' name='password' placeholder="Enter your Password" value={login.password} onChange={handleChange}/>
            </label><br/><br/>
            <label>
            Date of birth
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type='date' name='dob' value={login.dob} onChange={handleChange}/>
            </label><br/><br/>
            <br/>
            <button type='submit'  onClick={()=>navigate('Login')}>Register</button>
      </form>
      </div>



           
        </div>


    </div>
  )
}

export default Registraction