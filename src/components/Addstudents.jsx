import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const Addstudents = () => {
    const [data, setData] = useState(
        {
           
            "firstname": "",
            "lastname": "",
            "college": "",
            "dob": "",
            "course": "",
            "mobile": "",
            "email": "",
            "address": ""

        }
    )
    const InputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readvalue = () => {
        console.log(data)
        axios.post("https://courseapplogix.onrender.com/addstudents", data).then(
            (response) => {
                console.log(response.data)

                if (response.data.status == "success") {
                    alert("Stu added")

                } else {
                    alert("error")
                }
            }
        ).catch()
            .finally()
    }
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="ol col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                        
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label"> First Name</label>
                                <input type="text" className="input form-control" name='firstname' value={data.firstname} onChange={InputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label" > Last Name</label>
                                <input type="text" className="input form-control" name='lastname' value={data.lastname} onChange={InputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label"> Collage</label>
                                <input type="text" className="input form-control" name='college' value={data.college} onChange={InputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label"> Course</label>
                                <select name="course" id="" className="form-control " value={data.course} onChange={InputHandler}>
                                    <option className="option">MBA</option>
                                    <option className="option">MCA</option>
                                    <option className="option">BCA</option>
                                    <option className="option">BBA</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label"> DOB</label>
                                <input type="date" className="input form-control" name='dob' value={data.dob} onChange={InputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label"> Mobile No</label>
                                <input type="number" className="input form-control" name='mobile' value={data.mobile} onChange={InputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label"> Email</label>
                                <input type="email" className="input form-control" name='email' value={data.email} onChange={InputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label"> Address</label>
                                <textarea name="address" id="" className="form-control" value={data.address} onChange={InputHandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-warning" onClick={readvalue}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addstudents