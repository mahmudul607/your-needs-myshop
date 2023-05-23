import React from 'react';
import './Home.css'
import TopCarousel from '../TopCarousel/TopCarousel';
import Discount from './Discount';
const Home = () => {
    return (
        <div className='home-area'>
            <div className='topcarousel-area'>
            <TopCarousel></TopCarousel>
            </div>
            <div style={{height:'500px'}}>
                <Discount></Discount>
            </div>
            
        </div>
    );
};

export default Home;