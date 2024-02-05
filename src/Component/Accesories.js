import React, { useContext } from 'react';
import { Store } from '../CantextData/Data';
import { NavLink } from 'react-router-dom';
import { FaShareFromSquare } from "react-icons/fa6";
// import Electronics from './Electronics';

const Accesories = () => {
    const [received] =useContext(Store);
   
    return(
        <>

<div className='new'>
        <video controls autoPlay muted src='https://media.istockphoto.com/id/1497912096/video/multicultural-couple-evaluates-washing-machine-choices-at-home-electronics-store-man-and.mp4?s=mp4-640x640-is&k=20&c=czBJJXmHgLPXUZs8Qt8qiRC11l1OmyVJ2oyuaaaQAqQ=' className='first'/>
        
   </div>  

   <h1>MUST-HAVE ELECTRONICS AND APPLIANCES</h1>
<div className='letest'>

{/* {received.filter((item) =>  item.id >= 130 && item.id <= 133 && item.category === "home"  ) */}
{received.filter((item) => item.category === "accessories"  )
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
        </>
    );
}


export default Accesories;