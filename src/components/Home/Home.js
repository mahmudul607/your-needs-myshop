import React from 'react';
import './Home.css'
import TopCarousel from '../TopCarousel/TopCarousel';
import Discount from './Discount';
import BestSeller from './BestSeller/BestSeller';
import Offer from './Offer/Offer';
import HotDeal from './HotDeal/HotDeal';
import OurBlogs from './OurBlogs/OurBlogs';
import Instagram from './Instagram/Instagram';
const Home = () => {
    
    return (
        <div className='home-area'>
            <div className='topcarousel-area'>
            <TopCarousel></TopCarousel>
            </div>
            <div style={{height:'500px'}}>
                <Discount></Discount>
            </div>
            <BestSeller></BestSeller>
            <Offer></Offer>
            <HotDeal></HotDeal>
            <OurBlogs></OurBlogs>
            <Instagram></Instagram>
        </div>
    );
};

export default Home;