import React, { useState } from 'react'
import NavBar from './NavBar'

const Addstudents = () => {
    const [data, setData] = useState(
        {
            "Firstname": "",
            "Lastname": "",
            "college": "",
            "DoB": "",
            "Course": "",
            "Mobile": "",
            "Email": "",
            "Address": ""

        }
    )
    const InputHandler = (event) => {
        setData({ ...data, [event.target.name]:event.target.value})
    }
    const readvalue = () => {
        console.log(data)
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
                                <input type="text" className="input form-control" name='Firstname' value={data.Firstname} onChange={InputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label" > Last Name</label>
                                <input type="text" className="input form-control" name='Lastname' value={data.Lastname} onChange={InputHandler}/>
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label"> Collage</label>
                                <input type="text" className="input form-control" name='college' value={data.college} onChange={InputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label"> Course</label>
                                <select name="" id="" className="form-control " >
                                    <option className="option">MBA</option>
                                    <option className="option">MCA</option>
                                    <option className="option">BCA</option>
                                    <option className="option">BBA</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label"> DOB</label>
                                <input type="date" className="input form-control" name='DoB' value={data.DoB} onChange={InputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label"> Mobile No</label>
                                <input type="number" className="input form-control" name='Mobile' value={data.Mobile} onChange={InputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label"> Email</label>
                                <input type="email" className="input form-control" name='Email' value={data.Email} onChange={InputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label"> Address</label>
                                <textarea name="" id="" className="form-control" ></textarea>
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