import React from 'react';
import './Main.css'
import { NavLink } from 'react-router-dom';
const Main = () => {
  return (
    <div className=' container  py-4'>
      <div className="row g-3 justify-content-center">
        <div className="col-sm-3 py-4  box mx-2 text-center">
          <NavLink to={'addadmin'} className="mybtn mx-auto"> Add Admin </NavLink>
        </div>
        <div className="col-sm-3 py-4  box mx-2 text-center">
          <NavLink to={'showusers'} className="mybtn mx-auto"> Show Users </NavLink>
        </div>
        <div className="col-sm-3 py-4  box mx-2 text-center">
          <NavLink to={'adddoctor'} className="mybtn mx-auto"> Add Doctor </NavLink>
        </div>
        <div className="col-sm-3 py-4  box mx-2 text-center">
          <NavLink to={'showdoctor'} className="mybtn mx-auto">  Show Doctor</NavLink>
        </div>
        <div className="col-sm-3 py-4  box mx-2 text-center">
          <NavLink to={'addnews'} className="mybtn mx-auto"> Add News </NavLink>
        </div>
        <div className="col-sm-3 py-4  box mx-2 text-center">
          <NavLink to={'shoewnews'} className="mybtn mx-auto"> Show News </NavLink>
        </div>
        <div className="col-sm-3 py-4  box mx-2 text-center">
          <NavLink to={'showapp'} className="mybtn mx-auto"> Show Appointments </NavLink>
        </div>

        
      </div>
    </div>
  );
}

export default Main;
