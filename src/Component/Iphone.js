import React, { useContext } from 'react';
import { Store } from '../CantextData/Data';
import { NavLink } from 'react-router-dom';
import { FaShareFromSquare } from "react-icons/fa6";

const Iphone = () => {
    const [received] =useContext(Store);
 
    return(
        <>

<div className='new'>
   <video controls autoPlay muted src='https://media.istockphoto.com/id/1472333926/video/low-connection-and-business-people-with-phone-for-bluetooth-social-media-and-communication.mp4?s=mp4-640x640-is&k=20&c=OTVT5F1MKzNot6hRutx2Zz7ZhhYQW4jhjDdOB8I2Q4c=' className='first'/>
</div>

<h1 className='pn-hd'> SPOTLIGHT ON</h1>

        <h3>Iphone</h3>
        
<div className='letest'>

{/* {received.filter((item) =>  item.id >= 130 && item.id <= 133 && item.category === "home"  ) */}
{received.filter((item) => item.category === "iphone"  )
          .map((item, index) => {
            return (
              <div className="container" key={index}>
                   {/* <NavLink to={`/detailpage/${item.id}`} className="linkdes linkdes2"> */}
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


<h1>MI</h1>
       
<div className='letest'>

{/* {received.filter((item) =>  item.id >= 130 && item.id <= 133 && item.category === "home"  ) */}
{received.filter((item) => item.category === "mi"  )
          .map((item, index) => {
            return (
              <div className="container" key={index}>
                   {/* <NavLink to={`/detailpage/${item.id}`} className="linkdes linkdes2"> */}
                <img
                  src={item.image}
                  alt="not found"
               
                />
                <div id="Description2">
                <NavLink to={`/dynamic/${item.id}`}>
                <h2>{item.model}</h2>
                </NavLink>
                  {/* <p>{item.Description.slice(0,110)+"..."}</p> */}
                </div>
                {/* </NavLink> */}
              </div>
            );
          })}

</div>
        </>
    );
}



export default Iphone;