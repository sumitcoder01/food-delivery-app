import { useState, useEffect } from 'react';
import OrderCard from '../components/OrderCard';
import { useGlobalContext } from '../context/cart/CartState';

export default function MyOrder() {
  const { userName, getUser } = useGlobalContext();
  const host = "http://localhost:5000";
  const [orders, setOrders] = useState([]);

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


useEffect(() => {
        getOrders();
        getUser();
    // eslint-disable-next-line
  }, []);

  return (

    <div className="container my-5">
      <div className="h3 mb-4 ms-5">Hey, {userName} - your orders</div>
      <hr />
      <div className="row d-flex flex-wrap">
        { 
          orders.length !== 0 ?
            orders.map(order =>
              <div className="col-12 col-md-6 col-lg-4" key={order._id}>
                <OrderCard order={order} />
              </div>
            )
            : <div className='d-flex mt-5 mb-3 justify-content-center align-items-center w-100' style={{ minHeight: '45vh' }}>
              <div className='fs-3 text-success '>No Order yet!</div>
            </div> 
        }
      </div>
    </div>
  )
}
