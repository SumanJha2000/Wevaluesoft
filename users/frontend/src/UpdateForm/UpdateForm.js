import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom'
const UpdateForm = ({ fetchData }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [formData, setFormData] = useState({ ...location.state?.data || {} });

    useEffect(() => {
        // Set form data when the component mounts with the data from the location state
        setFormData(location.state?.data || {});
        console.log(formData, 'formm')
    }, [location.state]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        console.log('update')
        // Implement your update logic with formData
        try {
            const { data } = await axios.put(`http://localhost:8080/user/${formData.id}`, formData);
            navigate("/");
            fetchData();
        } catch (err) {
            console.log(err);
        }
    };

    const handleInputChange = async (e) => {
        e.preventDefault();
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? (checked ? 'Active' : 'Inactive') : value;
        setFormData({ ...formData, [name]: newValue });
    }

    return (
        <div className=' w-100 d-flex'>
            <form onSubmit={handleUpdate} id="login-form" class="login-form mx-auto mt-5" autocomplete="off">
                <h1 class="a11y-hidden">Login Form</h1>
                <div>
                    <label class="label-email">
                        <input value={formData.documentNo} onChange={handleInputChange} type="number" class="text" name="documentNo" placeholder="Document No" tabindex="1" required />
                        <span class="required">Document No</span>
                    </label>
                </div>
                <div>
                    <label class="label-email">
                        <input value={formData.firstname} onChange={handleInputChange} type="text" class="text" name="firstname" placeholder="Firstname" tabindex="1" required />
                        <span class="required">Firstname</span>
                    </label>
                </div>
                <div>
                    <label class="label-email">
                        <input value={formData.lastname} onChange={handleInputChange} type="text" class="text" name="lastname" placeholder="Lastname" tabindex="1" required />
                        <span class="required">Lastname</span>
                    </label>
                </div>
                <div>
                    <label class="label-email">
                        <input value={formData.email} onChange={handleInputChange} type="email" class="text" name="email" placeholder="Email" tabindex="1" required />
                        <span class="required">Email</span>
                    </label>
                </div>
                <div>
                    <label class="label-email">
                        <input value={formData.telephone} onChange={handleInputChange} type="mobile" class="text" name="telephone" placeholder="Telephone" tabindex="1" required />
                        <span class="required">Mobile</span>
                    </label>
                </div>
                <div>
                    <label class="label-email" >
                        <input checked={formData.status === 'Active'}
                            value={formData.status} onChange={handleInputChange} style={{ display: "flex", height: "12px", position: "relative", left: "-90px" }} type="checkbox" name="status" placeholder="Telephone" />
                        <span class="">Active</span>
                    </label>
                </div>
                <div className='' style={{ marginTop: "5px" }}>
                    <label className="label-email" for="role">
                        <select id="role" name="role" type="text" value={formData.role} onChange={handleInputChange}>
                            <option value="admin">Admin</option>
                            <option value="support" selected>Support</option>
                            <option value="assistant">Assistant</option>
                        </select>
                        <span class="required">Select Role</span>
                    </label>
                </div>
                <input onChange={handleInputChange} type="checkbox" name="show-password" class="show-password a11y-hidden" id="show-password" tabindex="3" />
                <input type="submit" value="Edit" />
            </form>
        </div>
    );
};

export default UpdateForm;
