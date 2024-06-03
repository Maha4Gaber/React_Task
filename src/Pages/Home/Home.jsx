import React from 'react';
import img1 from '../../assets/images/about-bg.jpg'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>

    
          <div className="container">
               <div className="row">

                         <div className="">
                              <div className="item item-first">
                                   <div className="caption">
                                        <div className="col-md-offset-1 col-md-10">
                                             {/* <img className="" src={img1} /> */}
                                             <h3>Let's make your life happier</h3>
                                             <h1>Healthy Living</h1>
                                             <Link to={"/doctor"} href="#team" className="section-btn btn btn-default smoothScroll">Meet Our Doctors</Link>
                                        </div>
                                   </div>
                              </div>
                         </div>

               </div>
          </div>
    
    </div>
  );
}

export default Home;
