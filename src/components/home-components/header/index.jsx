import React, { useContext } from 'react'
import "./style/index.scss"
import Header_logo from "./imges/header_logo.svg"
import bag_icons from "./imges/header-cart.svg"
import user_icon from "./imges/user.svg"
import { Link, useNavigate } from 'react-router-dom'
// react icons start
import { CiHeart } from "react-icons/ci";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { Korzinka } from '../../../context/add-bag'
import Badge from '@mui/material/Badge';
// react icons finish


const Header = () => {

    const {state , dispatch} = useContext(Korzinka)
    const navigate = useNavigate()


  return (
        <>  
            <header className='header'>
                <div className='container'>
                       <Link to={"/"}>
                            <img src={Header_logo} alt="header-logo" />
                       </Link>

                        <nav className='header-center'>
                            <Link to={"/"}><h5>Home</h5></Link>
                            <Link><h5>Products</h5></Link>
                            <Link><h5>Blog</h5></Link>
                            <Link><h5>FAQ</h5></Link>
                            <Link><h5>Contact Us</h5></Link>
                        </nav>

                        <div className='header-right'>
                            <button><CiHeart className='heart' /></button>
                            <Badge badgeContent={state.data.length} color="primary">
                            <button onClick={()=>{navigate("/basket"), console.log("Ishladi")}}><img src={bag_icons} alt="bag iccons"/></button>
                            </Badge>
                          
                            <button><img src={user_icon} alt="user icon" /></button>
                            <button className='open-bars'><HiMiniBars3BottomRight className='open-bars-icon' /></button>
                        </div>

                </div>
            </header>
        </>
  )
}

export default Header