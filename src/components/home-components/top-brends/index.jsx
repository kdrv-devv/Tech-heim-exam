import React from 'react'
import apple from './imges/apple.svg'
import sony from './imges/sony.svg'
import samsung from './imges/samsung.svg'
import canon from './imges/canon.svg'
import huawei from './imges/huawei-svgrepo-com 1.svg'
import lenovo from './imges/lenovo.svg'
import smartwatch from './imges/smartwatch.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './style/index.scss'

const TopBrends = () => {
  return (
    <>
        <section className='top-brends'>
            <div className='container'>

                <div className="top-brends-top">
                    <h4>Top Brands</h4>
                </div>

                <div className="top-brends-center">

                    <img src={apple} alt="apple" />
                    <img src={sony} alt="apple" />
                    <img src={samsung} alt="apple" />
                    <img src={canon} alt="apple" />
                    <img src={huawei} alt="apple" />
                    <img src={lenovo} alt="apple" />

                </div>

                <div className='top-brends-bottom'>
                    <div className="top-brends-bottom-left">
                        <h4>SMART WATCH</h4>
                        <h5>Various designs and brands</h5>
                        <button>view</button>
                    </div>
                    <div className="top-brends-bottom-right">
                        <img src={smartwatch} alt="smartwatch" />
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}

export default TopBrends