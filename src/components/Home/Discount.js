import React from 'react';
import './Discount.css'

const Discount = () => {
    return (
        <div className='discount-banner'>
            <div className='item-g1'>
                <div className='discount-left-banner'>
                    <div className='img-area'>
                        
                    </div>
                    <div className='text-area'>
                        <h3>Fresh Food
                            <br/>
                            Give a Little.
                        </h3>
                        <div className='shop-now-btn'>Shop Now</div>
                        
                    </div>
                    
                </div>
            </div>
            <div className='item-g2'>
                <div className='img-area-1'>
                    
                </div>
              
            </div>
            <div className='item-g3'>
                <div className='discount-last-banner'>
                    <div className='img-area-2'>
                        
                    </div>
                    <div className='text-area'>
                        <h3>Food
                            <br/>
                            Safety!
                        </h3>
                        <div className='shop-now-btn'>Shop Now</div>
                        
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Discount;