// import './style/index.scss'
import { Link } from "react-router-dom";
import React from "react";
import visonPro from "./imges/visonpro.svg";
import ultra from "./imges/23ultra.svg";
import iphone from "./imges/iphone.png";
import iphone15 from "./imges/iphone15.png";
import { IoIosStar } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import laptop from "./imges/laptop.svg";
import airpods from "./imges/airpods.svg";
import headphone from "./imges/headphone.svg";

import "../new-products/style/index.scss";
import useAxios from "../../../hooks/useAxios";
const BestSellers = () => {
  const { data, loading, error } = useAxios({ url:"seleres" });

  return (
    <>
      <section className="best-sellers">
        <div className="container">
          <div className="new-products-top">
            <div className="view-all">
              <h4>Best Sellers</h4>
              <Link>
                <h6>View all > </h6>
              </Link>
            </div>

            <div className="new-product-cards">
              {data.map((item) => (
                <Link to={`/seleres/:${item.id}`}>
                      <div className="new-card">
                  <button className="like-btn">
                    <IoIosHeartEmpty />
                  </button>
                  <div className="new-card-top">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="new-card-bottom">
                    <h5>{item.title}</h5>
                    <div className="rating">
                      <h6>{`$ ${item.newPrice}`}</h6>
                      <h5>
                        <IoIosStar /> {item.rate}
                      </h5>
                    </div>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSellers;
