import {useEffect } from 'react';
import OrderCard from '../components/OrderCard';
import { useGlobalContext } from '../context/cart/CartState';

export default function MyOrder() {
  const { userName, getUser,getOrders,orders } = useGlobalContext();

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
