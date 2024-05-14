import React from 'react';

const OrderCardSkeleton = () => (
    <div className="card bg-dark text-white fst-italic my-3 border border-success rounded" style={{ width: "16rem" }}>
        <div className="card-body text-center">
            <div className="card-title fst-5" style={{ backgroundColor: "#353935", height: "20px" }}></div>
            <div className="d-flex justify-content-between my-4">
                <div className="mx-1 d-flex flex-column align-items-center">
                    <label htmlFor="quantity" className="form-label text-white" style={{ backgroundColor: "#353935", height: "20px" }}></label>
                    <div className='text-success' style={{ backgroundColor: "#353935", height: "20px" }}></div>
                </div>
                <div className="mx-1 d-flex flex-column align-items-center">
                    <label htmlFor="size" className="form-label text-white" style={{ backgroundColor: "#353935", height: "20px" }}></label>
                    <div className='text-success' style={{ backgroundColor: "#353935", height: "20px" }}></div>
                </div>
                <div className="mx-1 d-flex flex-column align-items-center">
                    <label className="form-label text-white" style={{ backgroundColor: "#353935", height: "20px" }}></label>
                    <span className="card-text text-success" style={{ backgroundColor: "#353935", height: "20px" }}></span>
                </div>
            </div>
            <hr />
            <div className="text-success" style={{ backgroundColor: "#353935", height: "20px" }}></div>
        </div>
    </div>
);


export default function MyOrderSkeleton() {

    const numOrderCards = 6;

    return (
        <div className="container my-5">
            <div className="h3 mb-4 ms-5 w-25 mx-auto" style={{ backgroundColor: "#353935", height: "18px" }}></div>
            <hr />
            <div className="row d-flex flex-wrap">
                {[...Array(numOrderCards)].map((_, index) => (
                    <div className="col-12 col-md-6 col-lg-4" key={index}>
                        <OrderCardSkeleton />
                    </div>
                ))}
            </div>
        </div>
    );
}
