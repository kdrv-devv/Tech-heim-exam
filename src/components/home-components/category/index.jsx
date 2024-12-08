import React from 'react'
import './style/index.scss'
import acsessories from './imges/photo1.svg'
import camera from './imges/camera.svg'
import laptop from './imges/laptop.svg'
import smartphone from './imges/smartphone.svg'
import gaming from './imges/gaming.svg'
import mouse from './imges/sichqon.svg'
import smartwatch from './imges/smartwatch.svg'

const Category = () => {
  return (
    <>
       <section className='category'>
            <div className='container'>
                <div className='category-top'>
                    <div className="category-item">
                        <img src={acsessories} alt="" />
                        <h6>Accessories</h6>
                    </div>

                    <div className="category-item">
                        <img src={camera} alt="" />
                        <h6>Camera</h6>
                    </div>

                    <div className="category-item">
                        <img src={laptop} alt="" />
                        <h6>Laptop</h6>
                    </div>

                    <div className="category-item">
                        <img src={smartphone} alt="" />
                        <h6>Smart Phone</h6>
                    </div>

                    <div className="category-item">
                        <img src={gaming} alt="" />
                        <h6>Gaming</h6>
                    </div>

                    <div className="category-item">
                        <img src={acsessories} alt="" />
                        <h6>Smart Watch</h6>
                    </div>
                </div>
           

                <div className='category-bottom'>
                        <div className="category-card">

                                <button className='sale'>-70%</button>

                            <img src={mouse} alt="sichqon" />

                            <div className="card-bottom">
                                <h5>Logitech G502 Gaming Mouse</h5>
                                <div className='price'>
                                    <h6>$38.00</h6>
                                    <h5>$19.00</h5>
                                </div>
                            </div>
                        </div> 

                         <div className="category-card">
                            <img src={mouse} alt="sichqon" />

                            <div className="card-bottom">
                                <h5>Logitech G502 Gaming Mouse</h5>
                                <div className='price'>
                                    <h6>$38.00</h6>
                                    <h5>$19.00</h5>
                                </div>
                            </div>
                        </div> 

                         <div className="category-card">
                            <img src={smartwatch} alt="sichqon" />

                            <div className="card-bottom">
                                <h5>Logitech G502 Gaming Mouse</h5>
                                <div className='price'>
                                    <h6>$38.00</h6>
                                    <h5>$19.00</h5>
                                </div>
                            </div>
                        </div> 

                         <div className="category-card">
                            <img src={mouse} alt="sichqon" />

                            <div className="card-bottom">
                                <h5>Logitech G502 Gaming Mouse</h5>
                                <div className='price'>
                                    <h6>$38.00</h6>
                                    <h5>$19.00</h5>
                                </div>
                            </div>
                        </div> 

                         <div className="category-card">
                            <img src={mouse} alt="sichqon" />

                            <div className="card-bottom">
                                <h5>Logitech G502 Gaming Mouse</h5>
                                <div className='price'>
                                    <h6>$38.00</h6>
                                    <h5>$19.00</h5>
                                </div>
                            </div>
                        </div>    
                </div>

            </div>
       </section>
    </>
  )
}

export default Category