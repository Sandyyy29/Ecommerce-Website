import React from 'react'
import Layout from './common/Layout';
import Hero from './common/hero';
import LatestProduct from './common/LatestProduct';
import FeaturedProduct from './common/FeaturedProduct';


const Home = () => {
    return (
        <>
           <Layout>
            <Hero />
            <LatestProduct />
            <FeaturedProduct />
          </Layout>

        
        </>
    )
}

export default Home
