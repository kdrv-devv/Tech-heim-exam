// import './style/index.scss'
import { Link } from "react-router-dom";
import React, { useContext, useEffect } from "react";

import { IoIosHeart, IoIosStar } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";

import "../new-products/style/index.scss";
import useAxios from "../../../hooks/useAxios";
import { useLoader } from "../../../hooks/useLoader";
import { Liked } from "../../../context/add-liked";
const BestSellers = () => {
  const { data, loading, error } = useAxios({ url: "api/sellers" });

  const { state ,  dispatch } = useContext(Liked)

    useEffect(() => {
      localStorage.setItem("liked", JSON.stringify(state.data));
    }, [state.data]);
  const {newProductsLoader} = useLoader()

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
              {  loading || error ? newProductsLoader() : data.map((item) => {
               
               const isLiked = state.data.some((el) => el.id === item.id);
               return(
                <div className="new-card">
                        <button
                          onClick={() =>
                            dispatch({ type: "toggleliked", data: item })
                          }
                          className="like-btn z-[9]"
                        >
                          {isLiked ? (
                            <IoIosHeart style={{ color: "red" }} />
                          ) : (
                            <IoIosHeartEmpty />
                          )}
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
                </div>)
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSellers;
