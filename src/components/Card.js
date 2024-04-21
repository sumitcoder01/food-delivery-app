import React,{useState} from "react";
import { useGlobalContext } from '../context/cart/CartState';


export default function Card({food}) {
    const {authenticated,addToCart}= useGlobalContext();
    const [size,setSize]=useState(0);
    const [qty,setQty]=useState(1);
    const options= food.options[0];
    const quantityOptions =  Array.from(Array(6), (_, index) => index + 1);
    const sizeOptions = Object.keys(options);
    const finalPrice = qty*parseInt(options[sizeOptions[size]]); 

    const handleOnClick =()=>{
        const item ={
            id:food._id,
            name:food.name,
            quantity:parseInt(qty),
            size:sizeOptions[size],
            price:parseInt(finalPrice)
        };
        addToCart(item);
    }

    return (
        <div className="card bg-dark text-white fst-italic my-3 border border-success rounded" style={{ width: "20rem" }}>
            <div style={{ height: "198px" }} ><img loading="lazy" src={food.img} className="card-img-top object-fit-fill" style={{ maxHeight: "198px" }} alt={food.name} /></div>
            <div className="card-body text-center">
                <h5 className="card-title">{food.name}</h5>
                <div className="d-flex justify-content-center my-4">

                    {/* Quantity Dropdown */}
                    <div className="mx-1 d-flex flex-column align-items-center">
                        <label htmlFor="quantity" className="form-label text-white">Quantity</label>
                        <select className="form-select bg-success text-white" value={qty} onChange={(e)=>setQty(e.target.value)} id="quantity">
                            {quantityOptions.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>

                    {/* Size Dropdown */}
                    <div className="mx-1 d-flex flex-column align-items-center">
                        <label htmlFor="size" className="form-label text-white">Size</label>
                        <select className="form-select bg-success text-white"   value={size} onChange={(e) => setSize(e.target.value)} id="size">
                            {sizeOptions.map((option,index) => (
                                <option key={option} value={index}>{option}</option>
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
                <button disabled={!authenticated} onClick={handleOnClick} className="btn btn-success">Add To Cart</button>
            </div>
        </div>
    );
}
