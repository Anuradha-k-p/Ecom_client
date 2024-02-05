import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Store } from '../CantextData/Data';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import {  addtoCart } from '../Redux/Slicing';

const Dynamic = () => {
  const{id} =useParams();
  const [received] = useContext(Store);

  const Dispatch = useDispatch();


  
  return(
    <>
     <div>
            {
                received.filter((item)=>item.id===id).map((item,index)=>{
                  // const {
                  //   id = item.id,
                  //   image = item.image,
                  //   price = (item.price),
                  //   model = item.model,
                  //   quantity = (item.quantity),
                  // } = item;
                  return(
                
                     <div className="single-container" key={index}>
                    {/* <div  className="single-leftsidediv">
                      <img src={item.image} alt="Not Found" />
                    </div>
                    <div className="single-rightsidediv">
                        <div className="single-rightsideinnerdiv">
                      <h2 className="single-modelName">{item.name}</h2>
                      <hr></hr>
                      <h2 className="single-Price-of-All">Deals Of The Day:  {item.price}</h2>
      
                      <h2>Specifications:</h2>
                      <ul>
                        <li>
                          <p className="single-detailpada-p">Brand:  {item.brand}</p>
                        </li>
                        <li>
                          <p className="single-detailpada-p">Type:{item.type}</p>
                        </li>
                        <li>
                          <p className="single-detailpada-p">Color:{item.color}</p>
                        </li>
                        <li>
                          <p className="single-detailpada-p">Category:{item.category}</p>
                        </li>
                       
                      </ul>
                      
                      </div> */}
                      {/* <button className="single-buttonforAll" onClick={() =>
                      dispatch(addtoCart({ id, image, price, quantity, model }))
                    // } > */}
                    {/* // <div>
                    // <div  className="single-leftsidediv">
                    //   <img src={item.image} alt="Not Found" />
                    // </div>
                    // <h2 className="single-modelName">{item.name}</h2>

                    // <h2 className="single-Price-of-All">Deals Of The Day:  {item.price}</h2>


                    // <h2>Specifications:</h2>
                    //   <ul>
                    //     <li>
                    //       <p className="single-detailpada-p">Product/Model:{item.model}</p>
                    //     </li>
                    //     <li>
                    //       <p className="single-detailpada-p">Type:{item.type}</p>
                    //     </li>
                    //     <li>
                    //       <p className="single-detailpada-p">Color:{item.color}</p>
                    //     </li>
                    //     <li>
                    //       <p className="single-detailpada-p">Category:{item.category}</p>
                    //     </li>
                       
                    //   </ul>

                      


                    // </div>





                    // <button>
                    //    Buy Now
                    //   </button> */}


                      <div class="product-container">
    <img src={item.image} alt="product" class="product-image" />
    <div class="product-details">
      <h1 class="product-title">Product Name : {item.model}</h1>

      <h4> Feature : </h4>
      <ul>
   {/* <li>   Bank Offer10% off on Canara Bank Credit Card Transactions, up to ₹1,500 on orders of ₹5,000 and aboveT&CBank Offer10% off on Canara Bank Credit Card Transactions, up to ₹1,500 on orders of ₹5,000 and aboveT&CBank Offer10% off on Canara Bank Credit Card Transactions, up to ₹1,500 on orders of ₹5,000 and above T&C </li>

<li>Bank Offer10% off on OneCard Credit Card and EMI Transactions, up to ₹500 on orders of ₹2,000 and aboveT&C</li>

<li>Bank Offer8% off on Yes Bank Credit Card EMI Transactions, up to ₹2,000 on orders of ₹10,000 and aboveT&C</li>

<li>Special PriceGet extra 22% off (price inclusive of cashback/coupon)T&C</li> */}


<li>
                         <p className="single-detailpada-p">Product/Model:{item.model}</p>
                     </li>
                     <li>
                         <p className="single-detailpada-p">Type:{item.type}</p>
                       </li>
                     <li>
                         <p className="single-detailpada-p">Color:{item.color}</p>
                     </li>
                      <li>
                         <p className="single-detailpada-p">Category:{item.category}</p>
                      </li>



      </ul>



      <p class="product-description"><b>Important Note</b>To register this product for the warranty, the customer has to visit www.choices.com and mention the 'Internet Purchase' option and then select the 'CHOICE' option on the drop-down. While availing the warranty, they need to call the toll-free number that's on www.choices.com. The product has to be registered if the user wants to claim the warranty.</p>

      <p class="product-price">Price : {item.price}Rs.</p>
      <NavLink to='/cart'>   
         {/* <button class="add-to-cart-btn" onClick={()=>Dispatch(AddCart(item))}>Add to Cart</button> */}
         <button class="add-to-cart-btn" onClick={()=>Dispatch(addtoCart(item))}>Add to Cart</button>

</NavLink>
    </div>
  </div>



                     </div>   
                    
                 
                    )
                })
            }
        </div>

    
    </>
  )
}



export default Dynamic;
