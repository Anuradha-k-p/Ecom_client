import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate,NavLink } from 'react-router-dom'





const Login = () => {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  // const navi = useNavigate()

  // const handleLogin = () => {

  //   try {

  //     // const response = axios.post('http://localhost:5050/api/login', { email, password })
  //     const response = axios.post('https://e-back-5zf8.onrender.com/api/login', { email, password })
  //       .then((res) => {
  //         console.log(res.data, "User Login Data")
  //         if (res.data.msg === "Login successful!!") {
  //           console.log("login success")
  //           // navi('/dashboard')
  //           localStorage.setItem("token", res.data.token)
  //         }
  //         if (res.data.msg === "Oppss...😿😿 try again...") {
  //           alert("Register please............")
  //           navi('/register')
  //         }
  //       })
  //     console.log(response.data, "Response Data")
  //   } catch (error) {
  //     console.log(error, "Error in Login");
  //   }
  // }



  const nav=useNavigate()
  const [ldata,ldataset]=useState({
    email:"",
    password:""
  })
  const appdata1=(e)=>{
    
    ldataset({ ...ldata, [e.target.name]: e.target.value });
    console.log(ldata)
  };
  const datasubmit=(e)=>{
    e.preventDefault()
    axios
      // .post('https://e-back-5zf8.onrender.com/api/login',ldata)
      .post('https://e-back-5zf8.onrender.com/api/login',ldata)

      .then((res) => {
        
        
        
        if (res.data.msg === "your login successfully") {
          localStorage.setItem("token", res.data.token);
          console.log(res.data.jwttoken)
          
          alert(res.data.msg)
          nav("/")
      }
      else{
        alert(res.data.msg);
      }
      })
      .catch((error) => {
        console.log(error);
       
      });

      ldataset({        
        email: "",
        password: "",
      });

  };

















  return (
    <div className='nav'>
      <div className='middle'>

  
      <label htmlFor='email'>Email: </label><br />
      {/* <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} required id="myInput" /><br /> */}
      <input type='email' name='email' value={ldata.email} onChange={appdata1} className='in1' required />

      <label htmlFor='password'>Password: </label><br />
      {/* <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required /> */}
      <input type='password' name='password' value={ldata.password} onChange={appdata1} className='in1' required/>
      <br />
      <br />
      <button onClick={datasubmit} className='reg-but'>LogIn</button>
      
      <div>


      

      <NavLink to="/register" className="nextpage">
         Haven't account please Register first
      </NavLink>
      </div>
      </div>


    </div>
  )
}

export default Login





