import React, { useContext, useState } from 'react'
import '../details-components/style/index.scss'
import { Link, useParams } from 'react-router-dom'
import useAxios from '../../hooks/useAxios'
import ratimg from '../details-components/imges/rat.svg'
import shop from '../details-components/imges/shop.svg'
import guaranted from '../details-components/imges/verify.svg'
import delivery from '../details-components/imges/truck.svg'
import sariq from '../details-components/imges/discount-shape.svg'

// ==================================
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Header from '../home-components/header'
import { Korzinka } from '../../context/add-bag'


// ==================================


const Seleres = () => {

    const [value, setValue] = useState('female');

    const handleChange = (event) => {
      setValue(event.target.value); 
    };

    const {id} = useParams()
    const cleanId = id.replace(":", ""); 
    
    const {data , loading , error} = useAxios({url:`api/sellers/${cleanId}`})
    const { dispatch } = useContext(Korzinka);
    
    const addToCart = () => {
      if (data) {
        dispatch({ type: "add", value: data });
      }
    };

  return (
        <>

        <Header/>
        {/* <pre>{JSON.stringify(data, null , 4)}</pre> */}
          <section className="details">
      <div className="container">
        <nav className="details-nav">
          <Link to={"/"}>Home {`>`}</Link>
          <a href="#">Products {`>`}</a>
          <a href="#">Laptops {`>`} </a>
        </nav>
        <div className="product-main-details">
          <div className="product-photos">
            <div className="big-photo">
              <img src={data.image} alt="" />
            </div>

          </div>

          <div className="product-info">
            <h4>{data.title}</h4>

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
                <h6>{data.brand}</h6>
              </div>
              <div className="flex justify-between">
                <h5>Model Name :</h5>
                <h6>{data.model}</h6>
              </div>
              <div className="flex justify-between">
                <h5>Screen Size:</h5>
                <h6>{data.size}</h6>
              </div>
              <div className="flex justify-between">
                <h5>Hard Disk Size:</h5>
                <h6>{data.ram}</h6>
              </div>
              <div className="flex justify-between">
                <h5>CPU Model:</h5>
                <h6>{data.processor}</h6>
              </div>
            </div>
          </div>

          <div className="buy-type">
            <div className="price-product">
              <div className="flex flex-col gap-[4px]">
                <h5>{data.newPrice}</h5>
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
            <button onClick={addToCart}  className="add-btn">Add to cart</button>
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
               {data.display}
              </h6>
            </div>

            <div className="flex h-[50px] p-3 bg-[#F9F9F9] items-center justify-between">
              <h4>Graphics</h4>
              <h6> {data.graphics}</h6>
            </div>

            <div className="flex h-[50px] p-3 bg-[#F9F9F9] items-center justify-between">
              <h4>Processor</h4>
              <h6>{data.processor}</h6>
            </div>

            <div className="flex h-[50px] p-3 bg-[#F9F9F9] items-center justify-between">
              <h4>In the box</h4>
              <h6>{data.size}</h6>
            </div>

            <div className="flex h-[50px] p-3 bg-[#F9F9F9] items-center justify-between">
              <h4>Height</h4>
              <h6>{data.height}</h6>
            </div>
          </div>
        </div>
      </div>
    </section>


        </>
  )
}

export default Seleres