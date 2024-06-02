import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ShowDoctors = () => {
  const [doctors, setdoctors] = useState([]);
  const deleteuser=async(id)=>{
    try{
      await axios.delete("http://localhost:3000/doctors/"+id).then((res)=>{
        // console.log(res.data);
        getdata()
        // setdoctors(res.data)
      });

    }catch(error){
      console.error("Error fetching data:",error);
    }
  }
  const getdata= async()=>{
    try{
      await axios.get("http://localhost:3000/doctors").then((res)=>{
        // console.log(res.data);
        setdoctors(res.data)
      });

    }catch(error){
      console.error("Error fetching data:",error);
    }
  }
  useEffect(() => {
    
    getdata()
  }, []);
  return (
    <div>
      <div className="container">
      <h1 className=" greencolor text-center"> All Doctors</h1>
      <div className='table table-striped table-hover w-100'>
            <table className="table table-hover w-100 w-100">
              <thead className="">
                <tr className="">
                  <th className="">Id</th>
                  <th className="">Name</th>
                  <th className="">Specialist</th>
                  <th className="">Email</th>
                  <th className="">Phone</th>
                  <th className=""></th>
                  
                </tr>
              </thead>
              <tbody className="">

            {doctors.map((user)=><tr key={user.id}>
              <td className="">{user.id}</td>
              <td className="">{user.name}</td>
              <td className="">{user.specialist}</td>
              <td className="">{user.email}</td>
              <td className="">{user.phonenumber}</td>
              <td className=""> <button className="mybtn"  onClick={()=>{
                deleteuser(user.id)
              }}> Delete</button> </td>
            </tr>)}
              </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}

export default ShowDoctors;
