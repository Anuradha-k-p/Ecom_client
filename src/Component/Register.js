

import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./Compo.css"
import { FaGoogle } from "react-icons/fa";
import { SiGooglechrome } from "react-icons/si";
import { SiGmail } from "react-icons/si";

const Register = () => {
  // const navigate = useNavigate();

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [username, setUser] = useState('')
  // const [phone, setPhone] = useState('')


  // const handleregister = () => {
  //   try {
  //     // const response = axios.post('http://localhost:5050/api/register', { email, password })
  //     const response = axios.post('https://e-back-5zf8.onrender.com/api/register', { email, password })
  //       .then((res) => {
  //         console.log(res.data, "User Registered Data")
  //         if (res.data.msg === "email Already exist") {
  //           alert(res.data.msg)
  //           navigate('/login')
  //         }
  //         else {
  //           localStorage.setItem("token", res.data.token)
  //         }
  //       })
  //     console.log((response.data, "response Data"));
  //   }
  //   catch (error) {
  //     console.error(error, "Registration failed")
  //   }
  // }



  const [rdata,rdataset]=useState({
    username:"",
    
    email:"",
    password:"",
    mobilenumber:"",
  })
  const nav=useNavigate()
  const appdata=(e)=>{
    
    rdataset({ ...rdata, [e.target.name]: e.target.value });
    console.log(rdata)
  };
  const datasubmit=(e)=>{
    e.preventDefault()
    // https://nodehanson4.onrender.com/registerpage
    axios
      // .post('https://e-back-5zf8.onrender.com/api/register',rdata)
      .post('https://e-back-5zf8.onrender.com/api/register',rdata)

      .then((res) => {
        
        // setStore(res.data.msg);
        // alert(res.data.msg);
        console.log(res.data)
        
        if (res.data.msg === "user successfully registered") {
          localStorage.setItem('token',res.data.jwttoken)

          console.log(res.data.jwttoken)
          nav("/login")
          alert(res.data.msg)
      }
      else{
        alert(res.data.msg)
      }
      })
      .catch((error) => {
        console.log(error);
        // alert("User has not registered, please try again");
      });

      rdataset({
        username: "",
        
        email: "",
        password: "",
        mobilenumber:"",
      });

  };












  return (
    <div className='nav'>
      <div className='middle'>
        <p className='question'>HAVE AN ACCOUNT?</p>

        



        <div style={{width:"100%"}}>

<label htmlFor='username'>Username :    </label>
{/* <input type='email' value={username} onChange={(e) => setUser(e.target.value)} /> */}
<input type='text' name='username' value={rdata.username} onChange={appdata}  required/>
</div>


        <div style={{width:"100%"}}> 
              <label htmlFor='email'>Email :    </label>
              {/* <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} /> */}
              <input type='email' name='email' value={rdata.email} onChange={appdata} required />
            </div>




        <div style={{width:"100%"}}>

<label htmlFor="password">Password:    </label>
{/* <input type='password' value={rdata.password} onChange={(e) => setPassword(e.target.value)} /> */}
<input type='password' name='password' value={rdata.password} onChange={appdata}  required/>
</div>


        <div style={{width:"100%"}}>

<label htmlFor='mobilenumber'>Phone Number :   </label>
{/* <input type='email' value={phone} onChange={(e) => setPhone(e.target.value)} /> */}
<input type='number' name='mobilenumber' value={rdata.mobilenumber} onChange={appdata} required  />
</div>
<div>
        <button onClick={datasubmit} className='reg-but'>Register Your Account</button>
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














