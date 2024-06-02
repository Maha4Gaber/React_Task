import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
  // const [user,setuser]=useState([]);
  const [name,setname]=useState('');
  const [specialist,setspecialist]=useState('');
  const [email,setemail]=useState('');
  const [phonenumber,setphonenumber]=useState('');
  const navigate =useNavigate()

  const senddata = async()=>{
    // console.log({name,specialist,email,phonenumber});
    try{
      await axios.post("http://localhost:3000/doctors",{name,specialist,email,phonenumber}).then((res)=>{
        console.log(res);
        navigate('/dashboard/showdoctor')
      });

    }catch(error){
      console.error("Error fetching data:",error);
    }

  };

  return (
    <div>
      <h1 className=" greencolor text-center">Add Doctors</h1>
      <div className=" container ">
      <form onSubmit={(e)=>{
        e.preventDefault()
      }} className="mb-4  w-50 mx-auto">
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-4 text-start col-form-label colortext fs-3">Name</label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={(e)=>{
                setname(e.target.value)
              }}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="specialist" className="col-sm-4 text-start col-form-label colortext fs-3">Specialist</label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="specialist"
              name="specialist"
              value={specialist}
              onChange={(e)=>{
                setspecialist(e.target.value)
              }}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-4 text-start col-form-label colortext fs-3">Email</label>
          <div className="col-sm-8">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={(e)=>{
                setemail(e.target.value)
              }}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="phonenumber" className="col-sm-4 text-start col-form-label colortext fs-3">Phone</label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="phonenumber"
              name="phonenumber"
              value={phonenumber}
              onChange={(e)=>{
                setphonenumber(e.target.value)
              }}
              required
            />
          </div>
        </div>
        <button type="submit" onClick={()=>{
          senddata()
        }} className="btn btn1">Add Doctor</button>
      </form>
      </div>
    </div>
  );
}

export default AddDoctor;
