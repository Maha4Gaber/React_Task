import React, { useState ,useEffect} from 'react';
import img1 from '../../assets/images/news-image1.jpg';
import img2 from '../../assets/images/news-image2.jpg';
import img3 from '../../assets/images/news-image3.jpg';
import auther from '../../assets/images/author-image.jpg';
import axios from 'axios';

const News = () => {
  const [news, setnews] = useState([]);
 
        useEffect(() => {
          const getdata= async()=>{
               try{
                 await axios.get("http://localhost:3000/news").then((res)=>{
                   // console.log(res.data);
                   setnews(res.data)
                 });
           
               }catch(error){
                 console.error("Error fetching data:",error);
               }
             };
             
          getdata()
        }, []);
  return (
      <section id="news" data-stellar-background-ratio="2.5">
          <div class="container">
               <div class="row">
                   <div class="col-md-12 col-sm-12">
                         {/* <!-- SECTION TITLE --> */}
                         <div class="section-title wow fadeInUp" data-wow-delay="0.1s">
                              <h2>Latest News</h2>
                         </div>
                    </div>
                    {news.map((newsItem, index) => (
                     <div className="col-md-4 col-sm-6" key={index}>
                     <div className="news-thumb wow fadeInUp" data-wow-delay={`${0.4 + index * 0.2}s`}>
                       <a href="news-detail.html">
                         <img src={news.image} className="img-responsive" alt="" />
                       </a>
                       <div className="news-info">
                         <span>{news.date}</span>
                         <h3><a href="news-detail.html">{news.title}</a></h3>
                         <p>{news.description}</p>
                         <div className="author">
                           <img src={news.authorImage} className="img-responsive" alt="" />
                           <div className="author-info">
                             <h5>{news.author}</h5>
                             <p>{news.role}</p>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                    ))}
               </div>
          </div>
     </section>
 
  );
};

export default News;
