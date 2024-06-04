import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Appointment = () => {
  const navigate = useNavigate();
  const [name,setname]=useState([]);
  const [Email,setEmail]=useState('');
  const [selectdepartment,setselectdepartment]=useState('');
  const [PhoneNumber,setphonenumber]=useState('');
  const [additionalmessage,setadditionalmessage]=useState('');
 
  const getdata = async()=>{
    // console.log({name,age,email,phonenumber});
    try{
      await axios.post("http://localhost:3000/appointment",{name,Email,PhoneNumber,additionalmessage}).then((res)=>{
        console.log(res);
        navigate('/')
      });

    }catch(error){
      console.error("Error fetching data:",error);
    }

  };

  return (
    <div>
      <h1 className=" greencolor text-center">Make Appointment</h1>
      <div className=" container ">
      <form onSubmit={(e)=>{
        e.preventDefault()
      }} className="mb-4 w-50 mx-auto">
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
          <label htmlFor="age" className="col-sm-4 text-start col-form-label colortext fs-3">Email</label>
          <div className="col-sm-8">
            <input
              type="email"
              className="form-control"
              id="age"
              name="age"
              value={Email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-4 text-start col-form-label colortext fs-3">Department</label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              // id="email"
              // name="email"
              value={selectdepartment}
              onChange={(e)=>{
                setselectdepartment(e.target.value)
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
              value={PhoneNumber}
              onChange={(e)=>{
                setphonenumber(e.target.value)
              }}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="phonenumber" className="col-sm-4 text-start col-form-label colortext fs-3">Message</label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              // id="phonenumber"
              // name="phonenumber"
              value={additionalmessage}
              onChange={(e)=>{
                setadditionalmessage(e.target.value)
              }}
              required
            />
          </div>
        </div>
        <button type="submit" onClick={()=>{
          getdata()
        }} className="btn btn1">Add Appointment</button>
      </form>
      </div>
    </div>
  );
}

export default Appointment;
