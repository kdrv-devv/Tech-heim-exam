import React from "react";
import "./style/index.scss";
import ShowcaseRight_img from "./imges/showcase-right-img.png";
import macbook from './imges/macbook.png'
import laptop from './imges/mak3.jpeg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <div className="container">
          <div className="showcase-left">
            <div className="showcase-text">
              <h1>Tech Heim</h1>
              <h2>
                {" "}
                <span>"Join the </span> digital revolution <span>"</span>
              </h2>
            </div>
            <button>Explore More</button>
          </div>
          <div className="showcase-right">
            {/* swiper */}

            <Swiper
              className="swiper"
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              modules={[Pagination]}
              pagination={{ clickable: true }} 
            >
            
              <SwiperSlide className="swiper-slide">
                {" "}
                <img src={macbook} alt="showcase right img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                {" "}
                <img src={ShowcaseRight_img} alt="showcase right img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                {" "}
                <img src={laptop} alt="showcase right img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                {" "}
                <img src={ShowcaseRight_img} alt="showcase right img" />
              </SwiperSlide>
            </Swiper>
            {/* swiper */}

            <img
              className="showcase-right-img"
              src={ShowcaseRight_img}
              alt="showcase right img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
