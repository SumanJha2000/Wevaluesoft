import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SaveForm.css'

const SaveForm = ({ onSaved, fetchData }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        documentNo: '',
        phoneNo: '',
        password: '',
        status: 'inactive',
        role: '',
        email: '',
        phone: '',
    });

    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? (checked ? 'Active' : 'Inactive') : value;
        setFormData({
            ...formData,
            [name]: newValue,
        });
        console.log(formData, 'savefrom')
    };

    const handleSave = async (e) => {
        e.preventDefault();

        try {
            // Send a POST request to save the data
            console.log('resq')
            const response = await axios.post('http://localhost:8080/user/add', formData);

            // Handle success, you might want to update your UI or trigger other actions
            console.log('Saved successfully:', response.data);

            // Optionally, you can invoke a callback to inform the parent component about the save
            if (onSaved) {
                onSaved(response.data);
            }

            // Clear form and error state
            setFormData({
                documentNo: '',
                phoneNo: '',
                password: '',
                status: 'inactive',
                role: '',
                email: '',
                telephone: '',
                firstname: "",
                lastname: "",
            });
            setError('');
            navigate('/')
            fetchData();
            console.log('lgoi')
        } catch (error) {
            // Handle error, you might want to show an error message or log the error
            console.error('Error saving data:', error);
            setError('Error saving data. Please try again.');
        }
    };

    return (
        // <form onSubmit={handleSave}>
        //     {/* Your form fields go here */}
        //     <label>
        //         Document No:
        //         <input value={formData.phone} onChange={handleInputChange} type="text" name="documentNo" value={formData.documentNo} onChange={handleInputChange} />
        //     </label>
        //     <br />
        //     <label>
        //         Phone No:
        //         <input value={formData.phone} onChange={handleInputChange} type="text" name="phoneNo" value={formData.phoneNo} onChange={handleInputChange} />
        //     </label>
        //     <br />
        //     <label>
        //         Password:
        //         <input value={formData.phone} onChange={handleInputChange} type="password" name="password" value={formData.password} onChange={handleInputChange} />
        //     </label>
        //     <br />
        //     <label>
        //         Status:
        //         <input value={formData.phone} onChange={handleInputChange} type="text" name="status" value={formData.status} onChange={handleInputChange} />
        //     </label>
        //     <br />
        //     <label>
        //         Role:
        //         <input value={formData.phone} onChange={handleInputChange} type="text" name="role" value={formData.role} onChange={handleInputChange} />
        //     </label>
        //     <br />
        //     <label>
        //         Email:
        //         <input value={formData.phone} onChange={handleInputChange} type="email" name="email" value={formData.email} onChange={handleInputChange} />
        //     </label>
        //     <br />
        //     <label>
        //         Phone:
        //         <input value={formData.phone} onChange={handleInputChange} type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
        //     </label>
        //     <br />
        //     {/* Add more fields as needed */}
        //     <button type="submit">Save</button>

        //     {/* Display error message if there is an error */}
        //     {error && <p style={{ color: 'red' }}>{error}</p>}
        // </form>
        <div className='d-flex w-100'>
            <form onSubmit={handleSave} id="login-form mt-5" class="login-form mx-auto mt-2" autocomplete="off">
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
                <label class="label-show-password" for="show-password">
                    <span>Show Password</span>
                </label>
                <div>
                    <label class="label-password">
                        <input value={formData.password} onChange={handleInputChange} type="text" class="text" name="password" placeholder="Password" tabindex="2" required />
                        <span class="required">Password</span>
                    </label>
                </div>
                <input type="submit" value="Save" />
            </form>
        </div>
    );
};

export default SaveForm;
