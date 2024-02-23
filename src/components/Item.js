import React, { useEffect, useState } from 'react';
import Card from './Card';
import { HOST } from '../constant/constant';

export default function Item({ filter }) {
    const host = HOST;
    const [foodItem, setFoodItem] = useState([]);
    const [foodCategory, setFoodCategory] = useState([]);
    const fetchData = async () => {
        try {
            const response = await fetch(`${host}/api/food/fetchfoods`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            if (data.success) {
                const [fetchedFoodItem, fetchedFoodCategory] = data.food;
                setFoodItem(fetchedFoodItem);
                setFoodCategory(fetchedFoodCategory);
            }
            else {
                console.log("Data is not received successfully");
            }
        } catch (error) {
            console.log("Internal Server ", error);
        }
    }
    useEffect(() => {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='my-2'>
            {
                foodCategory.map(category =>
                    <div key={category._id} className="my-3 mx-3">
                        <div className="h3 mb-4 ms-5">{category.CategoryName}</div>
                        <hr />
                        <div className="row d-flex flex-wrap">
                            {
                                foodItem.map(food =>
                                    food.CategoryName === category.CategoryName && food.name.toLowerCase().includes(filter.toLowerCase()) ?
                                        <div className="col-12 col-md-6 col-lg-4" key={food._id}>
                                            <Card food={food} />
                                        </div>
                                        : null
                                )
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}
