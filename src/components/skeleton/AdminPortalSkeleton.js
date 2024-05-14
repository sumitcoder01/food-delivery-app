import React from 'react';

const CategoryCardSkeleton = () => (
  <div className="col-12 col-md-4 col-lg-3">
    <div className="card bg-dark text-white fst-italic my-3 border border-success rounded" style={{ width: "15rem" }}>
      <div className="card-body">
        <div className='my-2' style={{ backgroundColor: "#353935", height: "20px" }}></div>
        <div className="d-flex justify-content-between">
          <button className="btn btn-success" disabled style={{ width: "6rem" }}></button>
          <button className="btn btn-danger" disabled style={{ width: "6rem" }}></button>
        </div>
      </div>
    </div>
  </div>
);

const ItemCardSkeleton = () => (
  <div className="col-12 col-md-4 col-lg-3">
    <div className="card bg-dark text-white fst-italic my-3 border border-success rounded" style={{ width: "15rem" }}>
      <div className="card-body">
        <div className="card-title" style={{ backgroundColor: "#353935", height: "20px" }}></div>
        <div className='my-2' style={{ backgroundColor: "#353935", height: "20px" }}></div>
        <div className="d-flex justify-content-between">
          <button className="btn btn-success" disabled style={{ width: "6rem" }}></button>
          <button className="btn btn-danger" disabled style={{ width: "6rem" }}></button>
        </div>
      </div>
    </div>
  </div>
);


export default function AdminPortalSkeleton() {

  const numCategories = 4; 
  const numItems = 8;

  return (
    <div className="container mt-5 mb-3">
      <div className='d-flex justify-content-between my-2'>
        <button className="btn btn-outline-light px-3" disabled>Add Food Item</button>
        <button className="btn btn-outline-light px-3" disabled>Add Food Category</button>
      </div>
      <hr />
      <div className='my-2 row d-flex flex-wrap'>
        <h4>Food Category</h4>
        <hr />
        {[...Array(numCategories)].map((_, index) => (
          <CategoryCardSkeleton key={index} />
        ))}
      </div>
      <div className='my-2 row d-flex flex-wrap'>
        <h4>Food Items</h4>
        <hr />
        {[...Array(numItems)].map((_, index) => (
          <ItemCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}