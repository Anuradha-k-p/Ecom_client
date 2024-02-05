import React from 'react';
i
const Mi = () => {
    return(
        <>
        
<div className='letest'>

{/* {received.filter((item) =>  item.id >= 130 && item.id <= 133 && item.category === "home"  ) */}
{received.filter((item) => item.category === "home"  )
          .map((item, index) => {
            return (
              <div className="container" key={index}>
                   {/* <NavLink to={`/detailpage/${item.id}`} className="linkdes linkdes2"> */}
                <img
                  src={item.image}
                  alt="not found"
               
                />
                <div id="Description2">
                <h2>{item.model}</h2>
                  {/* <p>{item.Description.slice(0,110)+"..."}</p> */}
                </div>
                {/* </NavLink> */}
              </div>
            );
          })}

</div>
        
        </>
    )
}


export default Mi;