import React from 'react';
import Typewriter from 'typewriter-effect';
import './Offer.css'
const Offer = () => {
    return (
        <div className='offer-area'>
            <div className='offer-card-area'>
                <div className='offer-card-inner'>
                <div className='offer-text'>
                    <h6 style={{fontFamily:'Jost', textTransform:'uppercase'}}>Up to 15% Off</h6>
                    <h2 style={{fontFamily:'sans-serif'}}>
                    <Typewriter 
            options={{
                strings: [
                    "Best Quality Guaranty", 
                    "Quick Home Delivery",
                    "Quick Refund",
                ],
                autoStart: true,
                loop: true,
            }}
                /> </h2>
                    <p>Real cocktails to make ordinary occasions, extraordinary.</p>
                    
                </div>
                <div className='offer-btn'>
                    <div className='shop-now-btn'>Shop Now</div>
                    <div className='shop-now-btn'>View Detail</div>
                </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default Offer;