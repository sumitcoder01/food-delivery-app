import CartContext from "./cartContext";
import {useState,useContext, useEffect} from "react";

const useGlobalContext =()=> useContext(CartContext);

const CartState =(props)=>{
  const [authenticated,setAuthenticated]=useState(false);
  const updateAuthenicated = () => {
    if (!localStorage.getItem('authToken')) setAuthenticated(false);
    else setAuthenticated(true);
    }
    useEffect(()=>{
      updateAuthenicated();
    },[])
      return (
        <CartContext.Provider value={{authenticated,updateAuthenicated}}>
          {props.children}
        </CartContext.Provider>
      )
  };
export {CartState,useGlobalContext};