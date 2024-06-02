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

    <div>
       {/* <!-- NEWS --> */}
     <section id="news" >
          <div class="container">
               <div class="row">

                    <div class="col-md-12 col-sm-12">
                         {/* <!-- SECTION TITLE --> */}
                         <div class="section-title wow fadeInUp" data-wow-delay="0.1s">
                              <h2>Latest News</h2>
                         </div>
                    </div>
                    {news.map((newsItem, index) => (
                     <div className="col-4" key={index}>
                     <div className="news-thumb wow fadeInUp">
                       <p href="news-detail.html">
                         <img src={img1} className="img-responsive w-100" alt="" />
                       </p>
                       <div className="news-info">
                         <span>{newsItem.date}</span>
                         <h3><p href="newsItem-detail.html">{newsItem.title}</p></h3>
                         <p>{newsItem.description}</p>
                         <div className="author">
                           <img src={newsItem.authorImage} className="img-responsive" alt="" />
                           <div className="author-info">
                             <h5>{newsItem.author}</h5>
                             <p>{newsItem.role}</p>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                    ))}
               </div>
          </div>
     </section>
 </div>
  );
  
};

export default News;