import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [search, setSearch] = useState();
    const handleSearch = async () => {
        try {
            const { data } = await axios.post(`http://localhost:8080/user/${search}`);
        } catch (err) {
            console.log(err);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearch({ ...search, [name]: value });
    }
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-dark text-white">
            <Link to="/"><span className='fa fa-home text-white'></span></Link>
        </nav>

    )
}

export default Navbar