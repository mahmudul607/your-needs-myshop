import React from 'react';
import './BestSeller.css';
import BestSellerCard from './BestSellerCard/BestSellerCard';
import fakeData from '../../../fakeData';
const BestSeller = (props) => {
    const product = fakeData;
 
    
   const data = product.filter(pd => pd.produce === "seller");
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
                data.map(pd => <BestSellerCard product={pd} key={pd.key} handleAddProduct={props.handleAddProduct}></BestSellerCard>)
            }
        </div>
    </div>
    );
};

export default BestSeller;