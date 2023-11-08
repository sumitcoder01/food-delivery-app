import React, { useState } from 'react';

export default function AddFoodItem({ addFoodItem, onClose }) {
    const [optionsCategory, setOptionsCategory] = useState(true);

    const [formData, setFormData] = useState({
        CategoryName: '',
        name: '',
        img: '',
        options: [],
        description: ''
    });

    const addOption = (e) => {
        const updatedOptions = [{...formData.options[0],[e.target.name]:e.target.value}];
        setFormData({ ...formData, options: updatedOptions });
    }

    const changeOptions = () => {
        setFormData({ ...formData, options: [] });
        setOptionsCategory(!optionsCategory);
    }

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        addFoodItem(formData);
        onClose();
    }

    return (
        <div className="container mt-5 mb-3">
            <form onSubmit={handleOnSubmit}>
                <div className="mb-3">
                    <label htmlFor="CategoryName" className="form-label">CategoryName</label>
                    <input type="text" minLength={5} className="form-control bg-dark text-white border border-success fst-italic" value={formData.CategoryName} onChange={handleOnChange} id="CategoryName" name="CategoryName" style={{ boxShadow: 'none' }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" minLength={5} className="form-control bg-dark text-white border border-success fst-italic" value={formData.name} onChange={handleOnChange} id="name" name="name" style={{ boxShadow: 'none' }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control bg-dark text-white border border-success fst-italic" value={formData.description} onChange={handleOnChange} id="description" name="description" style={{ boxShadow: 'none' }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="img" className="form-label">Img</label>
                    <input type="text" required className="form-control bg-dark text-white border border-success fst-italic" value={formData.img} onChange={handleOnChange} id="img" name="img" style={{ boxShadow: 'none' }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="options" className="form-label">Options</label>
                    {optionsCategory ?
                        // For 'half' category
                        <div className="d-flex justify-content-between ">
                            <div>
                                <span>Half</span>
                                <input type="text" className="form-control bg-dark text-white border border-success fst-italic me-2" value={formData.options[0]?.half || ''} onChange={addOption} name="half" placeholder="Half" />
                            </div>
                            <div>
                                <span>Full</span>
                                <input type="text" className="form-control bg-dark text-white border border-success fst-italic me-2" value={formData.options[0]?.full || ''} onChange={addOption} name="full" placeholder="Full" />
                            </div>
                        </div>
                        :
                        // For 'regular', 'medium', 'large' category
                        <div className="d-flex justify-content-between">
                            <div>
                                <span>Small</span>
                                <input type="text" className="form-control bg-dark text-white border border-success fst-italic me-2" value={formData.options[0]?.regular || ''} onChange={addOption} name="regular" placeholder="regular" />
                            </div>
                            <div>
                                <span>Medium</span>
                                <input type="text" className="form-control bg-dark text-white border border-success fst-italic me-2" value={formData.options[0]?.medium || ''} onChange={addOption} name="medium" placeholder="medium" />
                            </div>
                            <div>
                                <span>Large</span>
                                <input type="text" className="form-control bg-dark text-white border border-success fst-italic me-2" value={formData.options[0]?.large || ''} onChange={addOption} name="large" placeholder="large" />
                            </div>
                        </div>
                    }
                    <span className='text-success mt-2 fs-5' onClick={changeOptions}>Change options</span>
                </div>
                <button type="submit" className="btn btn-success mt-2">Submit</button>
            </form>
        </div>
    )
}
