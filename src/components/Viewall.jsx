import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const Viewall = () => {
    const[data, changedata]=useState([])
    const fetchData =()=>{
        axios.get("https://courseapplogix.onrender.com/getdata").then(
        (response) => {changedata(response.data)
        }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()}, [])
    
  return (
    <div>
<NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
      <th scope="col">College</th>
      <th scope="col">Dob</th>
      <th scope="col">Course</th>
      <th scope="col">email</th>
      <th scope="col">address</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map(
            (value, index) =>{
                return <tr>
                <th scope="row">{value.index}</th>
                <td>{value.firstname}</td>
                <td>{value.lastname}</td>
                <td>{value.college}</td>
                <td>{value.dob}</td>
                <td>{value.course}</td>
                <td>{value.mobile}</td>
                <td>{value.email}</td>
                <td>{value.address}</td>
              </tr>
            }
        )
    }
    
    
   
  </tbody>
</table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Viewall