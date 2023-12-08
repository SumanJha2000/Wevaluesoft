import React, { useState } from 'react'
import './Header.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Header = ({ handleSearch, handleChange }) => {
    return (
        <div className='d-flex justify-content-around mt-4 border-1 px-2'>
            <form onSubmit={handleSearch} className='border-0 d-flex flex-row rounded ' style={{ width: "18rem", boxShadow: "0" }}>
                <input className="text-white" style={{ backgroundColor: "#D0C7CD" }} name="firstname" onChange={handleChange} placeholder='Search here...' type="text"></input>
                <button style={{ backgroundColor: "#D0C7CD" }} className="bg-danger border-0 px-3 mt-1" type="submit"><i className='text-white fa fa-search'></i></button>
            </form>
            <Link to="/save" className=''>
                <span className='fa fa-add'></span>&nbsp;&nbsp;Create User
            </Link>
        </div>
    )
}

export default Header