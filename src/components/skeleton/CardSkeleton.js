import React from 'react'

export default function CardSkeleton() {
    return (
        <div className="card bg-dark text-white fst-italic my-3 border border-success rounded" style={{ width: "20rem" }}>
            <div style={{ height: "198px", backgroundColor: "#f0f0f0" }}></div>
            <div className="card-body text-center">
                <span className="card-title" style={{ backgroundColor: "#f0f0f0", height: "20px" }}></span>
                <div className="d-flex justify-content-center my-4">
                    {/* Quantity Dropdown */}
                    <div className="mx-1 d-flex flex-column align-items-center">
                        <label htmlFor="quantity" className="form-label text-white" style={{ backgroundColor: "#f0f0f0", height: "20px" }}></label>
                        <select className="form-select bg-success text-white" style={{ backgroundColor: "#f0f0f0", height: "30px" }} disabled>
                            <option></option>
                        </select>
                    </div>
                    {/* Size Dropdown */}
                    <div className="mx-1 d-flex flex-column align-items-center">
                        <label htmlFor="size" className="form-label text-white" style={{ backgroundColor: "#f0f0f0", height: "20px" }}></label>
                        <select className="form-select bg-success text-white" style={{ backgroundColor: "#f0f0f0", height: "30px" }} disabled>
                            <option></option>
                        </select>
                    </div>
                    {/* Final Price */}
                    <div className="mx-1 d-flex flex-column align-items-center">
                        <label className="form-label text-white" style={{ backgroundColor: "#f0f0f0", height: "20px" }}></label>
                        <span className="card-text text-success" style={{ backgroundColor: "#f0f0f0", height: "20px" }}></span>
                    </div>
                </div>
                {/* Add To Cart Button */}
                <button disabled className="btn btn-success" style={{ backgroundColor: "#f0f0f0" }}></button>
            </div>
        </div>
    )
}
