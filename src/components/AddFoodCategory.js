import React, { useState } from 'react';

export default function AddFoodCategory({ addFoodCategory, onClose }) {

    const [formData, setFormData] = useState({
        CategoryName: '',
    });


    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        addFoodCategory(formData);
        onClose();
    }

    return (
        <div className="container mt-5 mb-3">
            <form onSubmit={handleOnSubmit}>
                <div className="mb-3">
                    <label htmlFor="CategoryName" className="form-label">CategoryName</label>
                    <input type="text" minLength={5} className="form-control bg-dark text-white border border-success fst-italic" value={formData.CategoryName} onChange={handleOnChange} id="CategoryName" name="CategoryName" style={{ boxShadow: 'none' }} />
                </div>
                <button type="submit" className="btn btn-success mt-2">Submit</button>
            </form>
        </div>
    )
}
