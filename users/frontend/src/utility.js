export const fetchData = async (dispatch) => {
    try {
        dispatch({ type: "userRequest" })
        const response = await fetch('http://localhost:8080/user/getAll');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        // setData(jsonData);
        if (jsonData == null || jsonData.length == 0) {
            return [];
        }
        console.log(jsonData);
        dispatch({ type: "userSuccess", payload: jsonData })
        // setColumns(Object.keys(jsonData[0]).map(key => ({ Header: key, accessor: key })));
    } catch (error) {
        dispatch({ type: "userFailure", payload: error });
        console.error('Error fetching data:', error);
    }
};