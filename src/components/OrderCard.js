import React from 'react';

export default function OrderCard({ order }) {
  const date = order.orderDate.split('T')[0];

  return (
    <div className="card bg-dark text-white fst-italic my-3 border border-success rounded" style={{ width: "16rem" }}>
      <div className="card-body text-center">
        <h5 className="card-title fst-5">{order.name}</h5>
        <div className="d-flex justify-content-between my-4">
          <div className="mx-1 d-flex flex-column align-items-center">
            <label htmlFor="quantity" className="form-label text-white">Quantity</label>
            <div className='text-success'>{order.quantity}</div>
          </div>
          <div className="mx-1 d-flex flex-column align-items-center">
            <label htmlFor="size" className="form-label text-white">Size</label>
            <div className='text-success'>{order.size}</div>
          </div>

          <div className="mx-1 d-flex flex-column align-items-center">
            <label className="form-label text-white">Price</label>
            <span className="card-text text-success">{order.price}/-</span>
          </div>
        </div>
        <hr />
        <div className="text-success">{date}</div>
      </div>
    </div>
  );
}

