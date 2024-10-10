import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
import { useParams } from 'react-router-dom'
const Updateemp = () => {
    const [inputuser, setInputuser] = useState({
        employeename: "",
        age: "",
        exprience: "",
        salary: ""
    })
    const { id } = useParams()

    const fetchsingle = async () => {
        const res = await axios.get(`http://localhost:8085/singleemp/${id}`)
        console.log(res)

        setInputuser({
            employeename: res.data.employeename,
            age: res.data.age,
            exprience: res.data.exprience,
            salary: res.data.salary
        })
    }

    useEffect(() => {
        fetchsingle()
    }, [])

    const handlechange = (event) => {
        setInputuser({
            ...inputuser,
            [event.target.name]: event.target.value,
        });
    };

    const handlesubmit = async (event) => {
        event.preventDefault()
        console.log(inputuser)

        const res = await axios.put(`http://localhost:8085/updataemp/${id}`,inputuser)

        console.log(res.data);
        if (res.status === 200) {
            window.location = "/";
        }
    }


    const backbtn = () => {
        navigate('/')
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <h1>Update Employee</h1>
                   <div>
                    <label>Employee Name</label>
                    &nbsp;&nbsp;&nbsp;<input type='text' placeholder='Enter a Name' value={inputuser.employeename} onChange={handlechange} name='employeename' required />
                   </div>

                <div>
                    <label>Age</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                        type="text"
                        name="age"
                        placeholder="Enter Age "
                        required
                        value={inputuser.age}
                        onChange={handlechange}
                    />
                </div>

                <div>
                    <label>Exprience</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type='text' placeholder='Enter a Exprience' value={inputuser.exprience} onChange={handlechange} name='exprience' required />
                </div>

                <div>
                    <label>Salary</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type='number' placeholder='Enter a salary' value={inputuser.salary} onChange={handlechange} name='salary' required />
                </div>

                <div>
                    <button className='btn' type='submit'>Update Employee</button>
                    <button onClick={backbtn} className='btn' type="submit">
                        Back
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Updateemp
