import React from 'react';
import './BestSeller.css';
import BestSellerCard from './BestSellerCard/BestSellerCard';
import fakeData2 from '../../../fakeData2';
const BestSeller = () => {
    const seller = fakeData2
    return (
        <div className='best-seller container mt-5 pb-3 br-bottom'>
        <div className='text-center'>
            <h3 className='title_heading'>
                Best Seller
            </h3>
            <p>Best Seller Product This Week!</p>
            
        </div>
        <div className='best-seller-area'>
            {
                seller.map(seller => <BestSellerCard seller={seller} key={seller.key}></BestSellerCard>)
            }
        </div>
    </div>
    );
};

export default BestSeller;