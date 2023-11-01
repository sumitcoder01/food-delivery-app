import React from "react";



export default function Card() {
    const quantityOptions = [1, 2, 3, 4, 5, 6];
    const sizeOptions = ["Small", "Medium", "Large"];
    return (
        <div className="card bg-dark text-white fst-italic my-3 border border-success rounded" style={{ width: "20rem" }}>
            <div style={{ height: "198px" }} ><img src="https://media.istockphoto.com/photos/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-picture-id1186759790?k=20&m=1186759790&s=612x612&w=0&h=e9MlX_7cZtq9_-ORGLPNU27VNP6SvDz7s-iwTxrf7wU=" className="card-img-top object-fit-contain" alt="Paneer Tikka" /></div>
            <div className="card-body text-center">
                <h5 className="card-title">Paneer Tikka</h5>
                <div className="d-flex justify-content-center my-4">

                    {/* Quantity Dropdown */}
                    <div className="mx-1 d-flex flex-column align-items-center">
                        <label htmlFor="quantity" className="form-label text-white">Quantity</label>
                        <select className="form-select bg-success text-white" id="quantity">
                            {quantityOptions.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>

                    {/* Size Dropdown */}
                    <div className="mx-1 d-flex flex-column align-items-center">
                        <label htmlFor="size" className="form-label text-white">Size</label>
                        <select className="form-select bg-success text-white" id="size">
                            {sizeOptions.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>

                    {/* Final Price */}
                    <div className="mx-1 d-flex flex-column align-items-center">
                        <label className="form-label text-white">Final Price</label>
                        <span className="card-text text-success">16755/-</span>
                    </div>
                </div>

                {/* Add To Cart Button */}
                <button className="btn btn-success">Add To Cart</button>
            </div>
        </div>
    );
}
