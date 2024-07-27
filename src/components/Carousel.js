import React from 'react';
import pizza from "../assets/pizza.jpeg";
import burger from "../assets/burger.png";
import sandwitch from "../assets/sandwitch.jpeg";

export default function Carousel({ filter, setFilter }) {
    const handleOnChange = (e) => {
        setFilter(e.target.value);
    }
    const images = [
        pizza,
        burger,
        sandwitch,
    ];

    return (
        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" style={{ zIndex: '-10', height: "450px" }}>
                    {images.map((image, index) => (
                        <div className={`${index === 0 ? 'carousel-item active' : 'carousel-item'} overflow-y-hidden`} key={index}>
                            <img src={image} className="w-100 object-fit-contain opacity-50 rounded float-start" alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>

                <div className="carousel-caption d-none d-md-block text-center" style={{ zIndex: '10' }}>
                    <div className="container text-center w-50">
                        <input type="text" className="form-control bg-dark text-white border border-success fst-italic" value={filter} onChange={handleOnChange} style={{ boxShadow: 'none' }} />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" style={{ zIndex: '10' }} aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" style={{ zIndex: '10' }} aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}


