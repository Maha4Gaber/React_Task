import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ShowApp = () => {
  const [doctors, setdoctors] = useState([]);
  const deleteuser=async(id)=>{
    try{
      await axios.delete("http://localhost:3000/appointment/"+id).then((res)=>{
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
      await axios.get("http://localhost:3000/appointment").then((res)=>{
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
      <h1 className=" greencolor text-center"> All Appointment</h1>
      <div className='table table-striped table-hover w-100'>
            <table className="table table-hover w-100 w-100">
              <thead className="">
                <tr className="">
                  <th className="">Id</th>
                  <th className="">Name</th>
                  <th className="">Email</th>
                  {/* <th className="">Department</th> */}
                  <th className="">Phone</th>
                  <th className="">message</th>
                  <th className=""></th>
                  
                </tr>
              </thead>
              <tbody className="">

            {doctors.map((user)=><tr key={user.id}>
              <td className="">{user.id}</td>
              <td className="">{user.name}</td>
              <td className="">{user.Email}</td>
              {/* <td className="">{user.selectdepartment}</td> */}
              <td className="">{user.PhoneNumber}</td>
              <td className="">{user.additionalmessage}</td>
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

export default ShowApp;
