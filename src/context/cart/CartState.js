import CartContext from "./cartContext";
import { useState, useContext, useEffect, useReducer } from "react";
import reducer from '../../reducer/reducer';

const useGlobalContext = () => useContext(CartContext);
const host = "http://localhost:5000";

const CartState = (props) => {
  const [cart, dispatch] = useReducer(reducer, []);
  const [authenticated, setAuthenticated] = useState(false);
  const createOrders = async () => {
    try {
      const response = await fetch(`${host}/api/order/createorders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("authToken")
        },
        body: JSON.stringify({ orders: cart })
      });
      const data = await response.json();
      if (data.success) {
        dispatch({ type: 'CHECK_OUT' });
      }
      else {
        console.log(data.error);
      }
    } catch (error) {
      console.log("Internal Server ", error);
    }
  }
  
  const getOrders = async () => {
    try {
      const response = await fetch(`${host}/api/order/fetchorders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("authToken")
        },
        
      });
      const data = await response.json();
      if (data.success) {
        console.log('Get orders!',data.orders);
      }
      else {
        console.log(data.error);
      }
    } catch (error) {
      console.log("Internal Server ", error);
    }
  }
  const updateAuthenicated = () => {
    if (!localStorage.getItem('authToken')) setAuthenticated(false);
    else setAuthenticated(true);
  }

  const addToCart = (food) => {
    for (let index = 0; index < cart.length; index++) {
      const item = cart[index];
      if (item.id === food.id && item.size === food.size) {
        //for UPDATE TO CARD
        dispatch({ type: 'UPDATE_TO_CART', index: index, quantity: food.quantity + item.quantity, price: food.price + item.price });
        return;
      }
    }
    //for ADD TO CARD
    dispatch({ type: 'ADD_TO_CART', payload: food });
  }

  const removeCartItem = (index) => {
    dispatch({ type: 'REMOVE_ITEM', index: index });
  }

  useEffect(() => {
    updateAuthenicated();
    if (localStorage.getItem('cart-data')) dispatch({ type: 'GET_CART_DATA' });
    // eslint-disable-next-line
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeCartItem, authenticated, updateAuthenicated, createOrders }}>
      {props.children}
    </CartContext.Provider>
  )
};
export { CartState, useGlobalContext };