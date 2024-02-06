import React from 'react';
//import Contact from './../Contact';
//import { NavLink } from 'react-router-dom';
import "./Compo.css"
import { SiGmail } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    return(
        <>
        {/* <div className='contact-short'> */}
            {/* <div className='grid grid-two-column'>
                <div>
                    <h3>Ready to start?</h3>
                    <h3> Talk To us Today</h3>
                    
                </div>
                
                    <button >
                        <NavLink to='/' className='footer-but'> Get Started</NavLink>
                    </button>
               

            </div> */}


      {/* //  </div> */}
        <footer>
            <div className='footer-about'>
                <h3>CHOICE</h3>
                <p>If you can dream it,<br/>
                   we can do it. 
                </p>
                <p>@{ new Date().getFullYear()}Choice Inc.   All rights Reserved. </p>

            </div>
            <div className='footer-subscribe'>
                <h4>Subscribe to Get Important Updates.</h4>
                <input type='email' placeholder='Enter Your Mail'/>
                <button  className='footer-but'>Subscribe</button>

            </div>
            <div className='footer-social'>
                <h3>Follow Us</h3>
                <div className='follow'>
                <SiGmail className='follow-child'/>
                <FaTwitter className='follow-child' />
                <ImFacebook2 className='follow-child'/>
                <FaInstagram className='follow-child'/>
                </div>

            </div>
        </footer>
{/*        
        <div>
            <p style={{backgroundColor:"rgb(41, 40, 40)",color:"white"}}>@{ new Date().getFullYear()}Choice Inc.   All rights Reserved.              | Privacy Policy | Terms of Use  | Sales Policy | Legal | Map </p>
        </div> */}
        
        </>
    );
}


export default Footer;