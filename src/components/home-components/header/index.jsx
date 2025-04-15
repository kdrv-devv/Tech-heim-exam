import React, { useContext, useState } from "react";
import "./style/index.scss";
import Header_logo from "./imges/header_logo.svg";
import bag_icons from "./imges/header-cart.svg";
import user_icon from "./imges/user.svg";
import { Link, useNavigate } from "react-router-dom";
// react icons start
import { CiHeart } from "react-icons/ci";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { Korzinka } from "../../../context/add-bag";
import Badge from "@mui/material/Badge";
// react icons finish
import { Button, Drawer, Space } from "antd";
import { Liked } from "../../../context/add-liked";

const Header = () => {
  const { state } = useContext(Korzinka);
  const { state:likedState, dispatch:LikedDispatch } = useContext(Liked);
  
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const showDefaultDrawer = () => {
    setSize("default");
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Drawer
        title={`Liked products`}
        placement="right"
        size={size}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <div className="w-[100%] h-[100%]">
          <h1> Tanlangan Maxsulotlar</h1>

          <div className="flex flex-col gap-3">
              {
                likedState.data.map((el)=>            <div className="liked-item w-full  border-b-2 flex flex-col gap-4 px-5 py-3">
                <div className="flex items-center justify-between">
                <img className="w-[30px] h-[30px]" src={el.image} alt="Salom" />
                <p className="text-[12px]">{el.title.slice(0,14)}</p>
                <p className="text-[13px]">price :{el.newPrice} $</p>
                </div>
                <button onClick={()=>LikedDispatch({type:"toggleliked" , data:el})} className="h-[30px] rounded-md text-white w-full bg-blue-500">Remove liked</button>
            </div>)
              }
          </div>


        </div>
      </Drawer>

      {/* ++++++++++++++++++++++++++++++ */}

      <header className="header">
        <div className="container">
          <Link to={"/"}>
            <img src={Header_logo} alt="header-logo" />
          </Link>

          <nav className="header-center">
            <Link to={"/"}>
              <h5>Home</h5>
            </Link>
            <Link>
              <h5>Products</h5>
            </Link>
            <Link>
              <h5>Blog</h5>
            </Link>
            <Link>
              <h5>FAQ</h5>
            </Link>
            <Link>
              <h5>Contact Us</h5>
            </Link>
            <Link to={"/admin"}>
              <h5>Admin Panel</h5>
            </Link>
          </nav>

          <div className="header-right">
            <Badge badgeContent={likedState.data.length} color="primary">
            <button onClick={showDefaultDrawer}>
              <CiHeart className="heart" />
            </button>
            </Badge>
            <Badge badgeContent={state.data.length} color="primary">
              <button
                onClick={() => {
                  navigate("/basket")
                }}
              >
                <img src={bag_icons} alt="bag iccons" />
              </button>
            </Badge>

            <button>
              <img src={user_icon} alt="user icon" />
            </button>
            <button className="open-bars">
              <HiMiniBars3BottomRight className="open-bars-icon" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
