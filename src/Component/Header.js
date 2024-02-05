import React from 'react';
// import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { FaCartArrowDown } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { NavLink } from 'react-router-dom';



const Header = () => {
    // const navigate =useNavigate();
    return(
        <>
        <div className='head'>
            <div className='logo'>
                <p className='lg'>CHOICE</p>

            </div>
            <div className='search-input'>
                <input type='text' placeholder='go with choce.........'/>

            </div>
            {/* <div className='cart'> */}
            {/* <PiShoppingCartSimpleLight /> */}
            {/* <NavLink to='/cart'>

            <FaCartArrowDown  className='cart'/>
            </NavLink> */}




            {/* </div> */}
            <div className='login'>
            <NavLink to='/cart'>

<FaCartArrowDown  className='cart'/>
</NavLink>



                <NavLink to='/login'>
           
                {/* <button className='regi'>
                    LOGIN
                </button> */}
                <MdPerson  className='cart'/>
                </NavLink>
            

            </div>

        </div>
        </>
    )
}



export default Header;
