import React from 'react';
import './BestSeller.css';
import BestSellerCard from './BestSellerCard/BestSellerCard';
const BestSeller = () => {
    return (
        <div className='container mt-5 pb-3 br-bottom'>
        <div className='text-center'>
            <h3 className='title_heading'>
                Best Seller
            </h3>
            <p>Best Seller Product This Week!</p>
            
        </div>
        <div>
            <BestSellerCard></BestSellerCard>
        </div>
    </div>
    );
};

export default BestSeller;