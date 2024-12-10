import React, { useEffect } from "react";
import "./style/index.scss";
import visonPro from "./imges/visonpro.svg";
import ultra from "./imges/23ultra.svg";
import iphone from "./imges/iphone.png";
import iphone15 from "./imges/iphone15.png";
import { IoIosStar } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";

const NewProduct = () => {
  const { data, loading, error } = useAxios({ url:`products` });
  console.log(data);
  
 

  return (
    <>
      <section className="new-product">
        <div className="container">
          <div className="new-products-top">
            <div className="view-all">
              <h4>New Products</h4>
              <Link>
                <h6>View all > </h6>
              </Link>
            </div>

            <div className="new-product-cards">
              {data.map((item) => (
                <div key={item.id} className="new-card">
                  <button   className="like-btn z-[9999]">
                    <IoIosHeartEmpty />
                  </button>
                  <Link to={`/products/:${item.id}`}>
                  <div className="new-card-top">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="new-card-bottom">
                    <h5>{item.title}</h5>
                    <div className="rating">
                      <h6>{item.newPrice}</h6>
                      <h5>
                        <IoIosStar /> {item.rate}
                      </h5>
                    </div>
                  </div>
                </Link>
                </div>

              ))}
            </div>
          </div>

          <div className="new-products-bottom">
            <div className="new-products-left">
              <div className="iphone15">
                <h4>
                  <span>Iphone </span>15 Series
                </h4>
                <img src={iphone15} alt="imphone 15 img" />
              </div>
              <div className="iphone15-details">
                <div className="days">
                  <div className="day">
                    <h6>8</h6>
                    <h5>Days</h5>
                  </div>
                  <div className="day">
                    <h6>8</h6>
                    <h5>Days</h5>
                  </div>

                  <div className="day">
                    <h6>8</h6>
                    <h5>Days</h5>
                  </div>

                  <div className="day">
                    <h6>8</h6>
                    <h5>Days</h5>
                  </div>
                </div>

                <div className="iphone15-text">
                  <h4>It feels good to be the first</h4>
                  <h6>
                    Get ready for the future of smartphones.Experience
                    innovation like never before. Stay tuned for the big iPhone
                    15 pre-sale.
                  </h6>
                </div>
                <button>Register Now</button>
              </div>
            </div>
            <div className="new-products-right">
              <h5>Play Station 5</h5>
              <div className="play-station-bottom">
                <h6>Digital Edition + 2TB</h6>
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewProduct;
