import CartContext from "./cartContext";
import { useState, useContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import reducer from '../../reducer/reducer';
import { HOST } from '../../constant/constant';

const useGlobalContext = () => useContext(CartContext);
const host = HOST;

const CartState = (props) => {
  const [cart, dispatch] = useReducer(reducer, []);
  const [authenticated, setAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const [orders, setOrders] = useState([]);
  const [admin, setAdmin] = useState(false);

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
        toast.success("Order placed Successfuly!");
      }
      else {
        toast.error(data.error);
        console.log(data.error);
      }
    } catch (error) {
      toast.error("Internal Server");
      console.log("Internal Server ", error);
    }
  }
  const getUser = async () => {
    try {
      const response = await fetch(`${host}/api/auth/getuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("authToken")
        },

      });
      const data = await response.json();
      if (data.success) {
        setUserName(data.user.name);
      }
      else {
        console.log(data.error);
      }
    } catch (error) {
      console.log("Internal Server ", error);
    }
  }
  const getAdmin = async () => {
    try {
      const response = await fetch(`${host}/api/auth/adminaccess`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("authToken")
        },

      });
      const data = await response.json();
      if (data.success) {
        setAdmin(true);
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
        setOrders([...data.orders].reverse());
      }
      else {
        console.log(data.error);
      }
    } catch (error) {
      console.log("Internal Server ", error);
    }
  }

  const updateAuthenicated = () => {
    if (!localStorage.getItem('authToken')) {
      setAuthenticated(false);
      setAdmin(false);
    }
    else {
      setAuthenticated(true);
      getAdmin();
    }
  }

  const clearCart = () => {
    dispatch({ type: 'CHECK_OUT' });
  }
  const addToCart = (food) => {
    for (let index = 0; index < cart.length; index++) {
      const item = cart[index];
      if (item.id === food.id && item.size === food.size) {
        //for UPDATE TO CARD
        dispatch({ type: 'UPDATE_TO_CART', index: index, quantity: food.quantity + item.quantity, price: food.price + item.price });
        toast.success("Item added to cart successfully!");
        return;
      }
    }
    //for ADD TO CARD
    dispatch({ type: 'ADD_TO_CART', payload: food });
    toast.success("Item added to cart successfully!");
  }

  const removeCartItem = (index) => {
    dispatch({ type: 'REMOVE_ITEM', index: index });
    toast.success("Item removed from cart successfully!");
  }

  useEffect(() => {
    updateAuthenicated();
    if (localStorage.getItem('cart-data')) dispatch({ type: 'GET_CART_DATA' });
    // eslint-disable-next-line
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeCartItem, authenticated, updateAuthenicated, createOrders, userName, getUser, clearCart, getOrders, orders, admin }}>
      {props.children}
    </CartContext.Provider>
  )
};
export { CartState, useGlobalContext };