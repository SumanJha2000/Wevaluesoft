import React, { useState, useEffect } from 'react';
import DataTable from './DataTable/DataTable';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import SaveForm from './SaveForm/SaveForm';
import UpdateForm from './UpdateForm/UpdateForm';
import axios from 'axios';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';

const App = () => {
    // const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        e.persist();
        setSearch(e.target.value);
        console.log(search);
    }


    const handleDelete = async (rowId) => {
        try {
            // Send a DELETE request to the API endpoint with the specific rowId
            const response = await axios.delete(`http://localhost:8080/user/${rowId}`);
            fetchData()
            // Handle success
            console.log(`User with ID ${rowId} deleted successfully.`, response.data);

            // Implement any additional logic, such as updating the UI or state
        } catch (error) {
            // Handle error
            console.error(`Error deleting user with ID ${rowId}:`, error);

            // Implement any error handling logic, such as displaying an error message
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!search) {
            fetchData()
            return;
        }
        // let arr=[];
        try {
            const { data } = await axios.get(`http://localhost:8080/user/name/${search}`);
            // arr.push(data);
            setData(data);
        } catch (err) {
            console.log(err);
            setData([])
        }
    }

    const fetchData = async () => {
        const link = `http://localhost:8080/user/getAll`;
        try {
            const response = await fetch(link);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const jsonData = await response.json();
            setData(jsonData);
            if (jsonData == null || jsonData.length == 0) {
                return [];
            }
            setColumns(Object.keys(jsonData[0]).map(key => ({ Header: key, accessor: key })));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {


        fetchData();
    }, []);

    const handleEdit = async (rowId) => {
        // Implement the edit logic using the rowData
        // try{


        // const rowData = await axios.get(`http://localhost:8080/user/${rowId}`)

        // // Navigate to the update page and pass the data
        // navigate('/update', { state: { data: rowData } });
        // }
        // catch(err){
        //     console.log(err);
        // }
    };



    return (
        <Router>
            <Navbar />
            {/* <Header /> */}
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<div><Header handleChange={handleChange} handleSearch={handleSearch} /><DataTable columns={columns} data={data} onDelete={handleDelete} onEdit={handleEdit} /></div>}
                />
                <Route
                    exact
                    path="/save"
                    element={<SaveForm fetchData={fetchData} />}
                />
                <Route
                    exact
                    path="/update"
                    element={<UpdateForm fetchData={fetchData} />}
                />
                {/* <Route
                    exact
                    path="*"
                    element={<Header  />}
                /> */}
            </Routes>
        </Router>
    );
};

export default App;
