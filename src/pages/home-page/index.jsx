import React from 'react'
import { BestSellers, Category, Footer, Header, NewProduct, OurBlog, Showcase, TopBrends } from '../../components'

const Home = () => {
  return (
        <>
            <Header/>
            <Showcase/>
            <Category/>
            <NewProduct/>
            <BestSellers/>
            <TopBrends/>
            <OurBlog/>
            <Footer/>
        </>
  )
}

export default Home