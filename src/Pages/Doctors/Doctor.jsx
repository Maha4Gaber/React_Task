import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);

  const getDoctorsData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/doctors");
      setDoctors(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDoctorsData();
  }, []);

  return (
    <div> KKK
      <section id="team">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="about-info">
                <h2 className="wow fadeInUp" data-wow-delay="0.1s">Our Doctors</h2>
              </div>
            </div>
            <div className="clearfix"></div>
            {doctors.map(doctor => (
              <div key={doctor.id} className="col-md-4 col-sm-6">
                <div className="team-thumb wow fadeInUp" data-wow-delay="0.2s">
                  <img src={`images/${doctor.image}`} className="img-responsive" alt="" />
                  <div className="team-info">
                    <h3>{doctor.name}</h3>
                    <p>{doctor.specialist}</p>
                    <div className="team-contact-info">
                      <p><i className="fa fa-phone"></i> {doctor.phone}</p>
                      <p><i className="fa fa-envelope-o"></i> <a href={`mailto:${doctor.email}`}>{doctor.email}</a></p>
                    </div>
                    <ul className="social-icon">
                      {/* Add social icons here if needed */}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Doctor;
