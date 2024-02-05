

import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./Compo.css"
import { FaGoogle } from "react-icons/fa";
import { SiGooglechrome } from "react-icons/si";
import { SiGmail } from "react-icons/si";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUser] = useState('')
  const [phone, setPhone] = useState('')


  const handleregister = () => {
    try {
      // const response = axios.post('http://localhost:5050/api/register', { email, password })
      const response = axios.post('https://e-back-5zf8.onrender.com/api/register', { email, password })
        .then((res) => {
          console.log(res.data, "User Registered Data")
          if (res.data.msg === "email Already exist") {
            alert(res.data.msg)
            navigate('/login')
          }
          else {
            localStorage.setItem("token", res.data.token)
          }
        })
      console.log((response.data, "response Data"));
    }
    catch (error) {
      console.error(error, "Registration failed")
    }
  }


  return (
    <div className='nav'>
      <div className='middle'>
        <p className='question'>HAVE AN ACCOUNT?</p>

        {/* <div className='in-data'>

          <div className='inner'>
            <div>

              <label>Username :</label>
              <input type='email' value={username} onChange={(e) => setUser(e.target.value)} />
            </div>
            <div>
              <label>Email :</label>
              <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className='inner'>
            <div>

              <label>Password:</label>
              <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>

              <label>Phone Number :</label>
              <input type='email' value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
          </div>

        </div> */}




        <div style={{width:"100%"}}>

<label>Username :    </label>
<input type='email' value={username} onChange={(e) => setUser(e.target.value)} />
</div>


        <div style={{width:"100%"}}> 
              <label>Email :    </label>
              <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>




        <div style={{width:"100%"}}>

<label>Password:    </label>
<input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
</div>


        <div style={{width:"100%"}}>

<label>Phone Number :   </label>
<input type='email' value={phone} onChange={(e) => setPhone(e.target.value)} />
</div>
<div>
        <button onClick={handleregister} className='reg-but'>Register Your Account</button>
        {/* <div className='remeber'> */}

        {/* <button type='checkbox'>Remember me</button> */}
        {/* <div> <input type='checkbox'/>Remember me</div> */}

        <p>Forgot Password</p>

        </div>
        <p>-Or Sign In With-</p>
        <div className='signin'>

          <p><FaGoogle className='social'/></p>
          <p><SiGooglechrome className='social'/></p>
          <p><SiGmail className='social'/></p>



        </div>



      </div>
    </div>
  )

}
export default Register









