import React from 'react'
import { BestSellers, Category, Header, NewProduct, OurBlog, Showcase, TopBrends } from '../../components'

const Home = () => {
  return (
        <>
            <Header/>
            <Showcase/>
            <Category/>
            <NewProduct/>
            <BestSellers/>
            <TopBrends/>
            {/* <OurBlog/> */}
        </>
  )
}

export default Home