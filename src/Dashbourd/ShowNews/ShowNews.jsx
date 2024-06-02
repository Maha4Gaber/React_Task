import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ShowNews = () => {
  const [news, setnews] = useState([]);
  const deleteuser=async(id)=>{
    try{
      await axios.delete("http://localhost:3000/news/"+id).then((res)=>{
        // console.log(res.data);
        getdata()
        // setnews(res.data)
      });

    }catch(error){
      console.error("Error fetching data:",error);
    }
  }
  const getdata= async()=>{
    try{
      await axios.get("http://localhost:3000/news").then((res)=>{
        // console.log(res.data);
        setnews(res.data)
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
      <h1 className=" greencolor text-center">All News</h1>
      <div className='table table-striped table-hover w-100'>
            <table className="table table-hover w-100 w-100">
              <thead className="">
                <tr className="">
                  <th className="">Id</th>
                  <th className="">Title</th>
                  <th className="">Description</th>
                  <th className="">Doctor</th>
                  <th className="">Date</th>
                  <th className=""></th>
                  
                </tr>
              </thead>
              <tbody className="">

            {news.map((user)=><tr key={user.id}>
              <td className="">{user.id}</td>
              <td className="">{user.title}</td>
              <td className="">{user.description}</td>
              <td className="">{user.doctor}</td>
              <td className="">{user.date}</td>
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
export default ShowNews;