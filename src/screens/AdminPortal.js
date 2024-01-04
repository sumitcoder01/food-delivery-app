import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/cart/CartState';
import Modal from '../modals/Modal';
import AddFoodItem from '../components/AddFoodItem';
import AddFoodCategory from '../components/AddFoodCategory';
import UpdateFoodItem from '../components/UpdateFoodItem';
import UpdateFoodCategory from '../components/UpdateFoodCategory';


export default function Item() {
    const host = "http://localhost:5000";
    const { admin } = useGlobalContext();
    const navigate = useNavigate();
    const [foodItem, setFoodItem] = useState([]);
    const [foodCategory, setFoodCategory] = useState([]);
    const [show, setShow] = useState(0);
    const [item, setItem] = useState(null);


    const checkForAdmin = () => {
        if (!admin) return navigate("/");
    }
    const closeModal = () => {
        setShow(0);
        setItem(null);
    }


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
            } else {
                toast.error("Data is not received successfully");
                console.log("Data is not received successfully");
            }
        } catch (error) {
            console.log("Internal Server ", error);
        }
    }
    const deleteFoodItem = async (id) => {
        const confirmed = window.confirm("Are you sure you want to delete?");

        if (!confirmed) {
            return;
        }

        try {
            const response = await fetch(`${host}/api/food/deletefoodItem/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },

            });
            const data = await response.json();
            if (data.success) {
                let newArray = foodItem.filter(element => element._id !== id);
                setFoodItem(newArray);
                toast.success(data.message);
                console.log(data.message);
            } else {
                toast.error("Data is not received successfully");
                console.log("Data is not received successfully");
            }
        } catch (error) {
            console.log("Internal Server ", error);
        }
    }

    const deleteFoodCategory = async (id) => {
        const confirmed = window.confirm("Are you sure you want to delete?");

        if (!confirmed) {
            return;
        }
        try {
            const response = await fetch(`${host}/api/food/deletefoodcategory/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },

            });
            const data = await response.json();
            if (data.success) {
                let newArray = [];
                let category = '';
                foodCategory.forEach(element => {
                    if (element._id !== id) newArray = [...newArray, element];
                    else category = element.CategoryName;
                });
                setFoodCategory(newArray);
                //Update Food Items--
                newArray = foodItem.filter(element => element.CategoryName !== category);
                setFoodItem(newArray);
                toast.success(data.message);
                console.log(data.message);
            } else {
                toast.error("Data is not received successfully");
                console.log("Data is not received successfully");
            }
        } catch (error) {
            toast.error("Internal Server!");
            console.log("Internal Server ", error);
        }
    }
    const updateFoodItem = async (food) => {
        try {
            const response = await fetch(`${host}/api/food/updatefooditem/${food.id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(food.data),
            });
            const data = await response.json();
            if (data.success) {
                let newArray = []
                foodItem.forEach(element => {
                    if (element._id === food.id) newArray = [...newArray, { ...food.data, _id: food.id }]
                    else newArray = [...newArray, element]
                });
                setFoodItem(newArray);
                toast.success(data.message);
                console.log(data.message);
            } else {
                toast.error("Data is not received successfully");
                console.log("Data is not received successfully");
            }
        } catch (error) {
            toast.error("Internal Server!");
            console.log("Internal Server ", error);
        }
    }

    const addFoodItem = async (food) => {
        try {
            const response = await fetch(`${host}/api/food/addfood`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(food),
            });
            const data = await response.json();
            if (data.success) {
                setFoodItem([...foodItem, { ...food, _id: data.id }]);
                toast.success(data.message);
                console.log(data.message);
            } else {
                toast.error("Data is not received successfully");
                console.log("Data is not received successfully");
            }
        } catch (error) {
            toast.error("Internal Server!");
            console.log("Internal Server ", error);
        }
    }


    const updateFoodCategory = async (category) => {
        try {
            const response = await fetch(`${host}/api/food/updatefoodCategory/${category.id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(category.data),
            });
            const data = await response.json();
            if (data.success) {
                let newArray = [];
                let oldCategory = '';
                foodCategory.forEach(element => {
                    if (element._id === category.id) {
                        oldCategory = element.CategoryName;
                        newArray = [...newArray, { ...category.data, _id: category.id }];
                    }
                    else newArray = [...newArray, element];
                });
                setFoodCategory(newArray);

                //update Food Items---
                newArray = [];
                foodItem.forEach(element => {
                    if (element.CategoryName === oldCategory) element.CategoryName = category.data.CategoryName;
                    newArray = [...newArray, element]
                });
                setFoodItem(newArray);
                toast.success(data.message);
                console.log(data.message);
            } else {
                toast.error("Data is not received successfully");
                console.log("Data is not received successfully");
            }
        } catch (error) {
            toast.error("Internal Server!");
            console.log("Internal Server ", error);
        }
    }

    const addFoodCategory = async (category) => {
        try {
            const response = await fetch(`${host}/api/food/addfoodcategory`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(category),
            });
            const data = await response.json();
            if (data.success) {
                setFoodCategory([...foodCategory, { ...category, _id: data.id }]);
                toast.success(data.message);
                console.log(data.message);
            } else {
                toast.error("Data is not received successfully");
                console.log("Data is not received successfully");
            }
        } catch (error) {
            toast.error("Internal Server!");
            console.log("Internal Server ", error);
        }
    }


    useEffect(() => {
        checkForAdmin();
        fetchData();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="container mt-5 mb-3">
            {show === 0 && <div className='d-flex justify-content-between my-2 '>
                <button onClick={() => setShow(1)} className="btn btn-outline-light px-3">Add Food Item</button>
                <button onClick={() => setShow(2)} className="btn btn-outline-light px-3">Add Food Category</button>
            </div>}
            {show === 1 && <Modal onClose={closeModal}><AddFoodItem addFoodItem={addFoodItem} onClose={closeModal} /></Modal>}
            {show === 2 && <Modal onClose={closeModal}><AddFoodCategory addFoodCategory={addFoodCategory} onClose={closeModal} /></Modal>}
            {show === 3 && <Modal onClose={closeModal}><UpdateFoodItem updateFoodItem={updateFoodItem} item={item} onClose={closeModal} /></Modal>}
            {show === 4 && <Modal onClose={closeModal}><UpdateFoodCategory updateFoodCategory={updateFoodCategory} item={item} onClose={closeModal} /></Modal>}
            <hr />
            <div className='my-2 row d-flex flex-wrap'>
                <h4>Food Category</h4>
                <hr />
                {
                    foodCategory.map(category =>
                        <div className="col-12 col-md-4 col-lg-3" key={category._id}>
                            <div className="card bg-dark text-white fst-italic my-3 border border-success rounded" style={{ width: "15rem" }}>
                                <div className="card-body">
                                    <div className='my-2'>Category - {category.CategoryName}</div>
                                    <div className="d-flex justify-content-between ">
                                        <button onClick={() => { setShow(4); setItem(category) }} className="btn btn-success">Update</button>
                                        <button onClick={() => deleteFoodCategory(category._id)} className="btn btn-danger">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='my-2 row d-flex flex-wrap'>
                <h4>Food Items</h4>
                <hr />
                {
                    foodItem.map(food =>
                        <div className="col-12 col-md-4 col-lg-3" key={food._id}>
                            <div className="card bg-dark text-white fst-italic my-3 border border-success rounded" style={{ width: "15rem" }}>
                                <div className="card-body">
                                    <div className="card-title">Item- {food.name}</div>
                                    <div className='my-2'>Category - {food.CategoryName}</div>
                                    <div className="d-flex justify-content-between ">
                                        <button onClick={() => { setShow(3); setItem(food) }} className="btn btn-success">Update</button>
                                        <button onClick={() => deleteFoodItem(food._id)} className="btn btn-danger">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
