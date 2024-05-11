import React, { useState } from 'react';
import { useGlobalContext } from '../context/cart/CartState';
import { HypnosisLoader } from '../components/loaders/HypnosisLoader';


export default function Cart() {
  const [loading, setLoading] = useState(false);
  const { cart, removeCartItem, createOrders } = useGlobalContext();
  const finalPrice = cart.reduce((total, item) => total + item.price, 0);
  if (cart.length === 0) {
    return (
      <div className='d-flex mt-5 mb-3 justify-content-center align-items-center w-100' style={{ minHeight: '62vh' }}>
        <div className='fs-3 text-success '>The Cart is Empty!</div>
      </div>
    )
  }

  const handleCreateOrders = async () => {
    if (loading) return;
    setLoading(true);
    await createOrders();
    setLoading(false);
  }

  return (
    <div className="container m-auto mt-5">
      <div className="table-responsive table-responsive-sm table-responsive-md">
        <table className="table table-hover table-dark">
          <thead className='fst-italic fs-4'>
            <tr>
              <th className='text-success' scope="col">#</th>
              <th className='text-success' scope="col">Name</th>
              <th className='text-success' scope="col">Quantity</th>
              <th className='text-success' scope="col">Option</th>
              <th className='text-success' scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className='fst-italic'>
            {cart.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.size}</td>
                <td>{item.price}/-</td>
                <td><button className="btn btn-danger" onClick={() => removeCartItem(index)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between">
        <h5 className="text-success fs-4 fst-italic">Total: <span>{finalPrice}/-</span></h5>
        <button className="btn btn-success" onClick={handleCreateOrders}>{loading ? <HypnosisLoader /> : "Checkout"}</button>
      </div>
    </div>
  )
}





