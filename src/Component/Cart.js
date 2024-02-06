import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveItem, IncreaseQuantity, DecreaseQuantity } from "../Redux/Slicing";
import "./Cart.css"
//import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from 'react-router-dom';






const Cart = () => {
  
  

  const navigate =useNavigate()

  const dispatch = useDispatch();
  const token = localStorage.getItem("token")

  const Products = useSelector((state) => state.Cart.cart);

  const total = Products.reduce((cur, item) => {
    return (cur) + item.price * (item.quantity);
  }, 0);




  const handleIncreaseQuantity = (id) => {
    dispatch(IncreaseQuantity({ id }));
  };
  const handleDecreaseQuantity = (id) => {
    dispatch(DecreaseQuantity({ id }));
  };


  // const token = localStorage.getItem("token")

  


  const clearCart = localStorage.setItem("Products",Products)



  const resetCart = () =>{
navigate("/")
localStorage.clear(clearCart)

  } 



//   const makePayment=async ()=>{
//       const stripe = await loadStripe("pk_test_51OgWF8SF5J9zEbVfCVy0lacN08v0pehFTUGnqBCxediYj9BLu8ZgYtUOb6zaAq3i87pZKEjFB62TAKOlHO3eUakc00rT8IgizL");
//   const body={
//       products:Products
//     }
//     const headers={
//       "content-Type":"application/json"
//     }
//     const response=await fetch("http://localhost:5050/api/payment",
//     {method:"POST",
//   headers:headers,
// body:JSON.stringify(body),

// }
//     );
//     const session=await response.json();
//     console.log(session)
//     const result=stripe.redirectToCheckout({
//       sessionId:session.id
//     });  
//     localStorage.removeItem("value")
//     // navigate("/Success")
    
//     if(result.error){
//       console.log( result.error);
//     }
    
 // }


 


  return (
    token?<div>
      <h2 className="headcart">Cart</h2>

      <div className="cart-content">
        <div className="headOfcart">
          <h4>Product</h4>
          <h4>Title</h4>
          <h4>Price and Quantity</h4>
        </div>

        <div>
          {Products &&
            Products.map((item, index) => {

              return (
                <div className="content-cart" key={index}>
                  <img src={item.image} alt="Loading..." />
                  <div className="cart-subcontent">
                    <h2>{item.model} {item.product}</h2>
                    <button
                      className="remove-cart"
                      onClick={() => dispatch(RemoveItem({ id: item.id }))}
                    >
                      Remove item
                    </button>
                  </div>
                  <h2 className="cartprice">

                    {"₹ " + item.price * item.quantity}
                  </h2>
                  <div>
                    <button
                      className="quantity-btn"
                      onClick={() => handleDecreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => handleIncreaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="total">
          <h2>Total : </h2>
          <h1 style={{ color: "black", fontSize: "28px" }}>{total}</h1>
        </div>

        <div className="buy">
          {/* <NavLink to="/success" state={data}> */}
          {/* <button onClick={makePayment}>Buy Now</button> */}
          <button onClick={resetCart} >Buy Now</button>

          {/* </NavLink> */}
        </div>
      </div>
    </div>:<h1>CART IS EMPTY

    </h1>
  );
};

export default Cart;


