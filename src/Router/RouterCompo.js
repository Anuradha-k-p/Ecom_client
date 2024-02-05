import React, { useState } from 'react';
import {Routes,Route, NavLink} from "react-router-dom";
import Home from '../Component/Home';
//import StoreCp from '../Component/Grocery';
import Iphone from '../Component/Iphone';
//import Ipad from '../Component/Ipad';
//import Macbook from '../Component/Macbook';
import Men from '../Component/Men';
//import Women from '../Component/Women';
import Accesories from '../Component/Accesories';
import Dynamic from './Dynamic';
import Error from '../Component/Error';
import "./style.css"
import Footer from '../Component/Footer';
import ContextApi from '../CantextData/Data';
import Women from '../Component/Women';
import Grocery from '../Component/Grocery';
import Cart from '../Component/Cart';
import Login from '../Component/Login';
import Register from '../Component/Register';
import Laptop from '../Component/Laptop';
//import Header from '../Component/Header';
// import { CgMenu } from "react-icons/cg";
// import { CgClose } from "react-icons/cg";


const RouterCompo = () => {

  // const[count,setCount]=useState(false)
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  
  const closeMenu = () => {
    setMenuOpen(false);
  };


    return(
        <>
        {/* <BrowserRouter> */}

        <div className="hamburger-menu">
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className={menuOpen ? 'line line1 open' : 'line line1'}></div>
        <div className={menuOpen ? 'line line2 open' : 'line line2'}></div>
        <div className={menuOpen ? 'line line3 open' : 'line line3'}></div>
      </div>

      <div className={menuOpen ? 'menu open' : 'menu'}>
       
        <NavLink onClick={closeMenu} style={({isActive})=>({color:(isActive)?"blue":"black"})} className="NavLink" to="/">HOME</NavLink>
        <NavLink onClick={closeMenu} style={({isActive})=>({color:(isActive)?"blue":"black"})} className="NavLink" to="/grocery">GROCERY</NavLink>
         <NavLink onClick={closeMenu} style={({isActive})=>({color:(isActive)?"blue":"black"})} className="NavLink" to="/iphone">PHONE</NavLink>
         <NavLink onClick={closeMenu} style={({isActive})=>({color:(isActive)?"blue":"black"})} className="NavLink" to="/laptop">LAPTOP</NavLink>
        <NavLink onClick={closeMenu} style={({isActive})=>({color:(isActive)?"blue":"black"})} className="NavLink" to="/men">MEN</NavLink>
       <NavLink onClick={closeMenu} style={({isActive})=>({color:(isActive)?"blue":"black"})} className="NavLink" to="/women">WOMEN</NavLink>
       <NavLink onClick={closeMenu} style={({isActive})=>({color:(isActive)?"blue":"black"})} className="NavLink" to="/accesories">ACCESORIES</NavLink>







      
      </div>
    </div>





{/* 

        <div className='nav-list'>


        <ul>
      <li>  <NavLink style={({isActive})=>({color:(isActive)?"blue":"black"})} className="NavLink" to="/">HOME</NavLink></li>
      <li>  <NavLink style={({isActive})=>({color:(isActive)?"blue":"black"})} className="NavLink" to="/store">STORE</NavLink></li>
      <li> <NavLink style={({isActive})=>({color:(isActive)?"blue":"black"})} className="NavLink" to="/iphone">IPHONE</NavLink></li>
      <li> <NavLink style={({isActive})=>({color:(isActive)?"blue":"black"})} className="NavLink" to="/ipad">IPAD</NavLink></li>
      <li> <NavLink style={({isActive})=>({color:(isActive)?"blue":"black"})} className="NavLink" to="/macbook">MACBOOK</NavLink></li>
      <li>  <NavLink style={({isActive})=>({color:(isActive)?"blue":"black"})} className="NavLink" to="/accesories">ACCESORIES</NavLink></li>
        </ul>


        <div className='mobile-navbar-btn' onClick={()=>setCount(!count)}>

        <CgMenu  name='menu-outline' className='mobile-nav-icon'/>
        </div>

        </div>

        <div>
          
        </div>
        <CgClose  name='close-outline' className='mobile-nav-icon close-outline'/>
        */}
 
<ContextApi>

        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/grocery' element={<Grocery/>}/>
           <Route path='/iphone' element={<Iphone/>}/>
           <Route path='/men' element={<Men/>}/>
           <Route path='/women' element={<Women/>}/>
           <Route path='/accesories' element={<Accesories/>}/>
           <Route path='/laptop' element={<Laptop/>}/>
           <Route path='/dynamic/:id' element={<Dynamic/>}/>
           <Route path='*' element={<Error/>}/>
           <Route path='cart' element={<Cart/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/register' element={<Register/>}/>


        </Routes>
</ContextApi>
        <Footer/>
        
        {/* </BrowserRouter> */}
        
        
        </>
    )
}



export default RouterCompo;


// molbile - https://img.freepik.com/premium-vector/cute-kawaii-smartphone-chibi-mascot-vector-cartoon-style_912383-844.jpg
//ipad -https://i.pinimg.com/736x/5a/ce/a2/5acea221078798ff4d7d1e39bfa2d0ae.jpg