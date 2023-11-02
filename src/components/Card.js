import React from "react";



export default function Card({food}) {
    const options= food.options[0];
    const quantityOptions = [1, 2, 3, 4, 5, 6];
    const sizeOptions = Object.keys(options);
    const finalPrice = 5*parseInt(options[sizeOptions[0]]); 
    return (
        <div className="card bg-dark text-white fst-italic my-3 border border-success rounded" style={{ width: "20rem" }}>
            <div style={{ height: "198px" }} ><img src={food.img} className="card-img-top object-fit-fill" style={{ maxHeight: "198px" }} alt={food.name} /></div>
            <div className="card-body text-center">
                <h5 className="card-title">{food.name}</h5>
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
                        <span className="card-text text-success">{finalPrice}/-</span>
                    </div>
                </div>

                {/* Add To Cart Button */}
                <button className="btn btn-success">Add To Cart</button>
            </div>
        </div>
    );
}
