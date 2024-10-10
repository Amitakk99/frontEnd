import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const Singleemp = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const [userdata, setUserdata] = useState([])

    const fetchsingleemp = async () => {
        const res = await axios.get(`http://localhost:8085/singleemp/${id}`)
        console.log(res)
        setUserdata(res.data)
    }
    useEffect(() => {
        fetchsingleemp()
    }, [])


    const backbtn = () => {
        navigate('/')
    }

    return (
        <div>
            <div>
                <table className='tblmain'>
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>EmployeeName</th>
                            <th>Age</th>
                            <th>Exprience</th>
                            <th>Salary</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th> 1 </th>
                            <th> {userdata.employeename} </th>
                            <th> {userdata.age} </th>
                            <th> {userdata.exprience} </th>
                            <th> {userdata.salary} </th>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <button onClick={backbtn} type="submit">
                    Back
                </button>
            </div>
        </div>
    )
}

export default Singleemp
