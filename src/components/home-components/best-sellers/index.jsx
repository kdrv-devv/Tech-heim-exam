// import './style/index.scss'
import { Link } from 'react-router-dom'
import React from 'react'
import visonPro from './imges/visonpro.svg'
import ultra from './imges/23ultra.svg'
import iphone from './imges/iphone.png'
import iphone15 from './imges/iphone15.png'
import { IoIosStar } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import laptop from './imges/laptop.svg'
import airpods from './imges/airpods.svg'
import headphone from './imges/headphone.svg'

import '../new-products/style/index.scss'
const BestSellers = () => {
  return (
  <>
  
    <section className='best-sellers'>
        <div className='container'>
        <div className='new-products-top'>
                        <div className='view-all'>
                        <h4>Best Sellers</h4>
                        <Link><h6>View all > </h6></Link>
                        </div>

                        <div className="new-product-cards">

                                    

                                <div className="new-card">
                                    <button className='like-btn'><IoIosHeartEmpty /></button>
                                    <div className="new-card-top">
                                        <img src={laptop} alt="" />
                                    </div>
                                    <div className="new-card-bottom">
                                        <h5>Iphone 14 promax 256 gig</h5>
                                        <div className="rating">
                                            <h6>$930.90</h6>
                                            <h5><IoIosStar />  2.5</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="new-card">
                                    <button className='like-btn'><IoIosHeartEmpty /></button>
                                    <div className="new-card-top">
                                        <img src={airpods} alt="" />
                                    </div>
                                    <div className="new-card-bottom">
                                        <h5>Iphone 14 promax 256 gig</h5>
                                        <div className="rating">
                                            <h6>$930.90</h6>
                                            <h5><IoIosStar />  5.5</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="new-card">
                                    <button className='like-btn'><IoIosHeartEmpty /></button>
                                    <div className="new-card-top">
                                        <img src={ultra} alt="" />
                                    </div>
                                    <div className="new-card-bottom">
                                        <h5>Iphone 14 promax 256 gig</h5>
                                        <div className="rating">
                                            <h6>$930.90</h6>
                                            <h5><IoIosStar />  1.5</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="new-card">
                                    <button className='like-btn'><IoIosHeartEmpty /></button>
                                    <div className="new-card-top">
                                        <img src={headphone} alt="" />
                                    </div>
                                    <div className="new-card-bottom">
                                        <h5>Iphone 14 promax 256 gig</h5>
                                        <div className="rating">
                                            <h6>$930.90</h6>
                                            <h5><IoIosStar />  4.5</h5>
                                        </div>
                                    </div>
                                </div>
                        </div>


                    </div>

        </div>
    </section>
    
  </>
  )
}

export default BestSellers