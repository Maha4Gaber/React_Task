import React from 'react';
import img1 from '../../assets/images/about-bg.jpg'
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
                                             <a href="#team" className="section-btn btn btn-default smoothScroll">Meet Our Doctors</a>
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
