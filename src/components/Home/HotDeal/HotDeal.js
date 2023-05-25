import React from 'react';
import './HotDeal.css';
import fakeData3 from '../../../fakeData3';
import HotDealCard from './HotDealCard';

const HotDeal = () => {
    const product = fakeData3

    return (
        <div>
        <div className='text-center'>
            <h3 className='title_heading'>Hot Deal</h3>
            <p>Don't Miss Today's Featured Deals!</p>   
        </div>   
        <div className='product-card-area'>
           {
            product.map(pd => <HotDealCard pd={pd} key={pd.key}></HotDealCard>)
           }
        </div>
        </div>
        
    );
};

export default HotDeal;