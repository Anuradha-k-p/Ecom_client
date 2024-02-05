import React, { useContext } from 'react';
//import Vedio1 from "../Vedio/xlarge_2x.mp4";
// import "./Compo.css"
import { NavLink } from 'react-router-dom';
import "../App.css"
import "./Rp.css"
import { Store } from '../CantextData/Data';
//import Gallery from './Slider';
import { TbTruckDelivery } from "react-icons/tb";
import { RiRecycleFill } from "react-icons/ri";
// import { TbReplaceFilled } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { FaShareFromSquare } from "react-icons/fa6";
// import { useDispatch } from 'react-redux';
// import { AddCart } from '../Redux/Slicing';

const Home = () => {
    const [received] =useContext(Store);
    console.log(received)

  //  const Dispatch = useDispatch();


    return(
        <>
        <div className='vedio'>
            <video controls autoPlay muted src='https://media.istockphoto.com/id/1348034164/video/omni-channel-technology-of-online-retail-business-method.mp4?s=mp4-640x640-is&k=20&c=Sbm_Lgi8UpY4ZjAWDzTTIw224S_prDuj1-PSqARRPQk='/>
            <h1 className='para'>Get it today.<br/> Buy online and we’ll have<br/> it ready for pickup.</h1>
        </div>


<h1 className='hm-hd'>POPULAR PICKS</h1>

<div className='letest'>

{/* {received.filter((item) =>  item.id >= 130 && item.id <= 133 && item.category === "home"  ) */}
{received.filter((item) => item.category === "home"  )
          .map((item, index) => {
            return (
              <div className="container" key={index}>



                <img
                  src={item.image}
                  alt="not found"
               />

                <div id="Description2">
                  <h3>{item.model}</h3>
                  <h3 style={{color:"green"}}>{item.price} RS</h3>
                </div>


                <NavLink to={`/dynamic/${item.id}`}>
                  <div className="hidden-paragraph">
                     <button className='add-but'>SHOW PRODUCT</button>
                     <p><FaShareFromSquare className="share"/></p>
                  </div>
                </NavLink>
                 
               
              </div>
            );
          })}

</div>

<div className="parentcontainer">
        {/* child 1 */}

        <div className="child1 child">
          <h3>Free Delivery</h3>
        {/* <i className="fa-solid fa-truck "></i> */}
        <TbTruckDelivery className='icon'/>
        
        <div ><p className="child1description childdescription">Welcome to our online store, where shopping just got even more rewarding! We're excited to introduce our exclusive Free Shipping offer, designed to make your shopping experience truly delightful.
        </p>
        </div>
        </div>

       {/* child 2 */}
        <div className="child2 child">
        <h3>Easy ReCycle</h3>
        {/* <i className="fa-solid fa-recycle"></i> */}
        {/* import { RiRecycleFill } from "react-icons/ri"; */}
        <RiRecycleFill className='icon'/>
        <div ><p className="child2description childdescription">At [Title], your satisfaction is our top priority. We understand that sometimes things may not go as planned, and that's why we're proud to offer a 100% Refund Guarantee. With this assurance.
        </p>
        </div>
        </div>


        <div className="child3 child">
        <h3>Easy Replacement</h3>
        {/* <i className="fa-solid fa-headphones-simple"></i> */}
        {/* <TbReplaceFilled /> */}
        <TbReplace className='icon'/>
        <div ><p className="child3description childdescription">At [Title], your satisfaction is our priority, and that's why we're thrilled to offer 24/7 support. We understand that your needs don't follow a schedule, and neither do we. With our always-on support, you can shop, inquire, and resolve issues whenever it's convenient for you.
        </p>
        </div>
        </div>

        </div>
        




        </>
    )
}


export default Home;