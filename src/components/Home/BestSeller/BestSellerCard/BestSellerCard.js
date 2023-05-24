import React from 'react';
import'./BestSellerCard.css';
const BestSellerCard = (props) => {

    const data = props.seller;
    return (
        <div className='product-item col-lg-3 col-6 col-md-4 col-sm-2'>
            <div className='product mb-30 relative'>
                <div className='img-product relative'>
                    <img src={data.imgUrl} alt=""/>
                </div>
                <div className='hover-icon'>
                    <ul>
                        <li className='select-options'>
                            <span>select-options</span>
                            
                        </li>
                        <li className='quickview'>
                            <span>QuickView</span>
                        </li>
                        <li className='add-to-wishlist'>
                            <span>add-to-wishlist</span>
                        </li>
                    </ul>
                    
                </div>
                <div className='seller-text'>
                <h5 className='des-font capital title-product'>{data.seller}</h5>
                <h4 className='price-area'>$ {data.price}</h4>
                </div>
            
                
            </div>
            
        </div>
    );
};

export default BestSellerCard;