import React, { useEffect, useState } from "react";
import bigPhoto from "../imges/big-photo.png";
import productLittle from "../imges/product-little.png";
import ratimg from "../imges/rat.svg";
import shop from "../imges/shop.svg";
import guaranted from "../imges/verify.svg";
import delivery from "../imges/truck.svg";
import sariq from "../imges/discount-shape.svg";
import "../style/index.scss";

// radio

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useParams } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";

const DetailsComponent = () => {
  const [value, setValue] = React.useState("female");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
// ===================================================================
  const { id } = useParams();

  const {data , loading , error} = useAxios({url:`products/${id}`})
  console.log(id);

  return (
    <section className="details">
        <pre>{JSON.stringify(product, null , 4)}</pre>
      <div className="container">
        <nav className="details-nav">
          <a href="#">Home ></a>
          <a href="#">Products ></a>
          <a href="#">Laptops > </a>
        </nav>
        <div className="product-main-details">
          <div className="product-photos">
            <div className="big-photo">
              <img src={bigPhoto} alt="" />
            </div>

            <div className="product-little-photos">
              <img src={productLittle} alt="" />
              <img src={productLittle} alt="" />
              <img src={productLittle} alt="" />
              <img src={productLittle} alt="" />
              <img src={productLittle} alt="" />
            </div>
          </div>

          <div className="product-info">
            <h4>MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</h4>

            <div className="rat">
              <img src={ratimg} alt="img" />
              <h6>sold 125</h6>
            </div>
            <div className="xizmatlar">
              <h6>
                <img src={shop} alt="" />
                In Stock
              </h6>
              <h6>
                <img src={guaranted} alt="" />
                Guaranteed
              </h6>
              <h6>
                <img src={delivery} alt="" />
                Free Delivery
              </h6>
            </div>

            <div className="xotirasi">
              <div className="flex justify-between">
                <h5>brand:</h5>
                <h6>Apple</h6>
              </div>
              <div className="flex justify-between">
                <h5>Model Name :</h5>
                <h6>Macbook Pro</h6>
              </div>
              <div className="flex justify-between">
                <h5>Screen Size:</h5>
                <h6>13.3 Inches</h6>
              </div>
              <div className="flex justify-between">
                <h5>Hard Disk Size:</h5>
                <h6>256 GB</h6>
              </div>
              <div className="flex justify-between">
                <h5>CPU Model:</h5>
                <h6>core i5</h6>
              </div>
            </div>
          </div>

          <div className="buy-type">
            <div className="price-product">
              <div className="flex flex-col gap-[4px]">
                <h5>$ 1299.00</h5>
                <h6>last price $ 1410,87</h6>
              </div>
              <h4>
                {" "}
                <img src={sariq} alt="img" />
                -12%
              </h4>
            </div>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Pay Now"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Buy in installments "
                />
              </RadioGroup>
            </FormControl>

            <div className="month">
              <button>
                <h6>3</h6>
                <h5>Month</h5>
              </button>
              <button>
                <h6>6</h6>
                <h5>Month</h5>
              </button>

              <button>
                <h6>7</h6>
                <h5>Month</h5>
              </button>

              <button>
                <h6>14</h6>
                <h5>Month</h5>
              </button>
            </div>
            <button className="add-btn">Add to cart</button>
          </div>
        </div>

        <div className="product-full-details">
          <div className="full-details-header">
            <a href="" className="!text-blue-500">
              Technical Details
            </a>
            <a href="">Similar Products</a>
            <a href="">Comments</a>
          </div>

          <div className="texnical-details w-[60%]">
            <h5>Technical Details</h5>

            <div className="flex h-[50px] p-3 bg-[#F9F9F9] items-center justify-between">
              <h4>Display</h4>
              <h6>
                13.3-inch (diagonal) LED-backlit display with IPS technology
              </h6>
            </div>

            <div className="flex h-[50px] p-3 bg-[#F9F9F9] items-center justify-between">
              <h4>Graphics</h4>
              <h6>Apple 10-core GPU</h6>
            </div>

            <div className="flex h-[50px] p-3 bg-[#F9F9F9] items-center justify-between">
              <h4>Processor</h4>
              <h6>Apple M2 chip</h6>
            </div>

            <div className="flex h-[50px] p-3 bg-[#F9F9F9] items-center justify-between">
              <h4>In the box</h4>
              <h6>67W USB-C Power Adapter, USB-C Charge Cable (2 m)</h6>
            </div>

            <div className="flex h-[50px] p-3 bg-[#F9F9F9] items-center justify-between">
              <h4>Height</h4>
              <h6>0.61 inch (1.56 cm)</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsComponent;
