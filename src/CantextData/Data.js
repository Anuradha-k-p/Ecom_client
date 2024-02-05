
import React,{createContext,useEffect,useState} from "react";
import axios from 'axios';



export const Store=createContext();

const ContextApi=(props)=>{
  const [data,setData] = useState([]);

  useEffect(()=>{
    const fetchdata =async()=>{
      try{
        //  const response = await axios.get('http://localhost:5050/api/ecom');
         const response = await axios.get('https://e-back-5zf8.onrender.com/api/ecom');

        setData(response.data);
      }
      catch(err){
        console.log("error in fetch",err)
      }
    }
    fetchdata();

  },[])






    return(
        <>
        <Store.Provider value={[data]}>
           {props.children}

        </Store.Provider>
        </>
    )
}

export default ContextApi


