import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Addemp = () => {
    const navigate=useNavigate()
    const [userdata,setUserdata]=useState([])


    const fetchalluser=async()=>{
        const res = await axios.get(`http://localhost:8085/getallemp`)

        console.log(res.data)

        setUserdata(res.data)
    }

    useEffect(()=>{
        fetchalluser()
    },[])

    const [inputuser, setInputuser] = useState({
        employeename: "",
        age: "",
        exprience: "",
        salary: ""
    })

    const handlesubmit=async(event)=>{
            event.preventDefault()
        const res = await axios.post(`http://localhost:8085/createemployee`,inputuser)

        console.log(res);
        fetchalluser();

        navigate('/')
    }

    const handlechange = (event) => {
        setInputuser({
            ...inputuser,
            [event.target.name]: event.target.value,
        });
    };

    const backbtn = () => {
        navigate('/')
    }

  return (
    <div>
          <form onSubmit={handlesubmit}>
              <h1>Create Employee</h1>
              <div>
                  <label>Employee Name</label>&nbsp;&nbsp;
                  <input type='text' placeholder='Enter a Name' value={inputuser.employeename} onChange={handlechange} name='employeename' required />
              </div>

              <div>
                  <label>Age</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                  <label>Exprience</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input type='text' placeholder='Enter a Exprience' value={inputuser.exprience} onChange={handlechange} name='exprience' required />
              </div>

              <div>
                  <label>Salary</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input type='number' placeholder='Enter a salary' value={inputuser.salary} onChange={handlechange} name='salary' required />
              </div>

              <div>
                  <button type='submit' className='submitbtn'>Submit</button>
                  <button onClick={backbtn} className='btn' type="submit">
                      Back
                  </button>
              </div>
          </form>
    </div>
  )
}

export default Addemp
