import React from "react";
import { Link } from "react-router-dom";
import ourLeft from './imges/our-blog-left.png'
import ourHeadphone from './imges/our-headphone.png'
import ourRight from './imges/our-rigt.png'
import calendar from './imges/calendar.svg'
import save from './imges/save.svg'
import timer from './imges/timer.svg'
import computer from './imges/computer.svg'
import "./style/index.scss";

const OurBlog = () => {
  return (
    <>
      <section className="our-blog">
        <div className="container">
          <div className="our-blog-header">
            <h5>Our Blogs</h5>
            <Link>
              <h6>View all  </h6>
            </Link>
          </div>

          <div className="our-blog-center">

            
            <div className="our-blog-left">
                <img className="our-left" src={ourLeft} alt="img" />
                <div className="our-blog-left-bottom">
                    <div className="day">
                       <h5> <img src={calendar} alt="img" /> August , 8 , 2023</h5>
                        <h5><img src={timer} alt="" />3 min read</h5>
                    </div>
                    <h4>Meta Platforms plans to release free software that...</h4>
                    <h6>The parent company of Facebook, Meta Platforms, is introducing software to help developers </h6>
                </div>
            </div>

            <div className="our-blog-right-flex">

            <div className="our-blog-right">
                <img src={ourHeadphone} alt="img" />
                <div className="headphone-case">
                    <h5>8 Things You Probably Didn’t Know About Headphones</h5>
                    <p>Owning a headphone could mean a different thing for different people. For some, it act as a fashion statement. It’s easy to spot these people, the headphone are almost always just hanging around the neck.</p>
               
                    <div className="hadphone-day">
                        <h5><img src={timer} alt="timer" /> March , 28 , 2023</h5>
                        <img src={save} alt="" />
                    </div>
                </div>
            </div>
            <div className="our-blog-right">
                <img src={ourRight} alt="img" />
                <div className="headphone-case">
                    <h6>8 Things You Probably Didn’t Know About Headphones</h6>
                    <p>Owning a headphone could mean a different thing for different people. For some, it act as a fashion statement. It’s easy to spot these people, the headphone are almost always just hanging around the neck.</p>
               
                    <div className="hadphone-day">
                        <h5><img src={timer} alt="timer" /> March , 28 , 2023</h5>
                       
                    </div>
                </div>
            </div>
            </div>


          </div>

          <div className="our-blog-bottom">
                <div className="our-blog-item">
                    <img src={computer} alt="" />
                    <h6>Latest and Greatest Tech</h6>
                </div>
                <div className="our-blog-item">
                    <img src={computer} alt="" />
                    <h6>Latest and Greatest Tech</h6>
                </div>

                <div className="our-blog-item">
                    <img src={computer} alt="" />
                    <h6>Latest and Greatest Tech</h6>
                </div>

                <div className="our-blog-item">
                    <img src={computer} alt="" />
                    <h6>Latest and Greatest Tech</h6>
                </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurBlog;
