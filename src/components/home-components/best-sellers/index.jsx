// import './style/index.scss'
import { Link } from "react-router-dom";
import React, { useContext } from "react";

import { IoIosStar } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";

import "../new-products/style/index.scss";
import useAxios from "../../../hooks/useAxios";
const BestSellers = () => {
  const { data, loading, error } = useAxios({ url: "api/sellers" });

  return (
    <>
      <section className="best-sellers">
        <div className="container">
          <div className="new-products-top">
            <div className="view-all">
              <h4>Best Sellers</h4>
              <Link>
                <h6>View all {">"} </h6>
              </Link>
            </div>

            <div className="new-product-cards">
              {data.map((item) => (
                <div className="new-card">
                  <button className="like-btn">
                    <IoIosHeartEmpty />
                  </button>
                  <Link to={`/seleres/:${item.id}`}>
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
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSellers;
