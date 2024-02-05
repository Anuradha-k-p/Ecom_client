import React, { useContext } from 'react';
import { Store } from '../CantextData/Data';
import { NavLink } from 'react-router-dom';
import { FaShareFromSquare } from "react-icons/fa6";

const Men = () => {
    const [received] =useContext(Store);
 
    return(
        <>
        <div className='new'>
        <video controls autoPlay muted src='https://media.istockphoto.com/id/1328244639/video/happy-sweet-boy-shopping-with-his-dad-at-the-mall-each-carrying-bags-while-talking-cheerfully.mp4?s=mp4-640x640-is&k=20&c=WSpZYZg8QZuxzBSsUtYJYz9FiQ3RLLc0ELn3eQEQwjs='className='first'/>
          </div>
          <h1 className='hm-hd'>ADD TO YOUR WISHLIST</h1>
        <div className='letest'>

{/* {received.filter((item) =>  item.id >= 130 && item.id <= 133 && item.category === "home"  ) */}
{received.filter((item) => item.category === "men"  )
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

        </>
    );
}


export default Men;