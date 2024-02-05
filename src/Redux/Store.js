import { configureStore } from "@reduxjs/toolkit";
import Addtocart from "../Redux/Slicing";

// import { configureStore } from "@reduxjs/toolkit";

// import CartSlice from "./Slicing"


export const Store = configureStore({
  reducer: {
    Cart: Addtocart,
  },
});




// export const Store = configureStore({
//   reducer:{
//     Cart:CartSlice
//   }
// })

