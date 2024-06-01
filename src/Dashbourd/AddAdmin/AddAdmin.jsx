import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddAdmin = () => {
  const [user,setuser]=useState([]);
  const [name,setname]=useState('');
  const [age,setage]=useState('');
  const [email,setemail]=useState('');
  const [phonenumber,setphonenumber]=useState('');
  const navigate =useNavigate()

  const getdata = async()=>{
    // console.log({name,age,email,phonenumber});
    try{
      await axios.post("http://localhost:3000/users",{name,age,email,phonenumber,role:'admin'}).then((res)=>{
        console.log(res);
        navigate('/dashboard/showusers')
      });

    }catch(error){
      console.error("Error fetching data:",error);
    }

  };

  return (
    <div>
      <h1 className=" greencolor text-center">AddAdmin</h1>
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
          <label htmlFor="age" className="col-sm-4 text-start col-form-label colortext fs-3">Age</label>
          <div className="col-sm-8">
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              value={age}
              onChange={(e)=>{
                setage(e.target.value)
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
          <label htmlFor="phonenumber" className="col-sm-4 text-start col-form-label colortext fs-3">PhoneNumber</label>
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
          getdata()
        }} className="btn btn1">Add Admin</button>
      </form>
      </div>
    </div>
  );
};

export default AddAdmin;
