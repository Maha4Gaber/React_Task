import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddNews = () => {
  // const [user,setuser]=useState([]);
  const [name,setname]=useState('');
  const [title,settitle]=useState('');
  const [email,setemail]=useState('');
  const [description,setdescription]=useState('');
  const navigate =useNavigate()

  const senddata = async()=>{
    // console.log({name,title,email,description});
    try{
      let doctorname=localStorage.username;
      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1; // Months start at 0!
      let dd = today.getDate();

      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;

      const formattedToday = dd + '/' + mm + '/' + yyyy;
      await axios.post("http://localhost:3000/news",{date:formattedToday,doctor:doctorname,title,description}).then((res)=>{
        console.log(res);
        navigate('/dashboard/shoewnews')
      });

    }catch(error){
      console.error("Error fetching data:",error);
    }

  };

  return (
    <div>
      <h1 className=" greencolor text-center">Add News</h1>
      <div className=" container ">
      <form onSubmit={(e)=>{
        e.preventDefault()
      }} className="mb-4  w-50 mx-auto">
        <div className="row mb-3">
          <label htmlFor="title" className="col-sm-4 text-start col-form-label colortext fs-3">Title</label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={title}
              onChange={(e)=>{
                settitle(e.target.value)
              }}
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="description" className="col-sm-4 text-start col-form-label colortext fs-3">Description</label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={description}
              onChange={(e)=>{
                setdescription(e.target.value)
              }}
              required
            />
          </div>
        </div>
        <button type="submit" onClick={()=>{
          senddata()
        }} className="btn btn1">Add News</button>
      </form>
      </div>
    </div>
  );
}

export default AddNews;
