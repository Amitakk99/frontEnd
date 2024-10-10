import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from "react-router-dom";
import '../App.css'
const Home = () => {
    const navigate = useNavigate()


    const [inputuser, setInputuser] = useState({
        employeename: "",
        age: "",
        exprience: "",
        salary: ""
    })


    const [userdata, setUserdata] = useState([])

    const fetchallemployee = async () => {
        const res = await axios.get("http://localhost:8085/getallemp")
        console.log(res)

        setUserdata(res.data)
    }

    useEffect(() => {
        fetchallemployee()
    }, []);


    const handledelete = async (id) => {
        const res = await axios.delete(`http://localhost:8085/deleteemp/${id}`)
        if (res.status === 200) {
            fetchallemployee()
        }
    }

    const addbtn = () => {
        navigate('/addemployee')
    }


    return (
        <div>
            <h1>Employee Details</h1>
            <div>
                <table className='tblmain'>
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>EmployeeName</th>
                            <th>Age</th>
                            <th>Exprience</th>
                            <th>Salary</th>
                            <th>Read</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userdata.map((item, i) => (
                            <tr key={item._id}>
                                <th> {i + 1} </th>
                                <th> {item?.employeename} </th>
                                <th> {item?.age} </th>
                                <th> {item?.exprience} </th>
                                <th> {item?.salary} </th>

                                <th><NavLink to={`/singleemp/${item._id}`} style={{ marginLeft: "20px" }}>Read</NavLink></th>

                                <th><NavLink to={`/updateemp/${item._id}`}>Update</NavLink></th>
                                <th><button onClick={() => handledelete(item._id)}>Delete</button></th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            <div className='addemp'>
                <button onClick={addbtn} type='submit' className='addempp' >Add Employee</button>
            </div>
        </div>
    )
}

export default Home
