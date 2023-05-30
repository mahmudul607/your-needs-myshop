import React from 'react';
import Carousel2 from '../Carousel2/Carousel2';
import './Instagram.css'

const Instagram = () => {
    return (
        <div style={{width:'99%'}} className='text-center'>
            <div style={{paddingBottom:'5%'}}>
                <h4  className='title_heading'>Fresh Food On Instagram</h4>
                <br/>
                <span style={{color:'green'}}>#MyShop</span>
               
                
            </div>
           
            
                <div className='insta-carousel'>
                    <Carousel2></Carousel2>
                </div>
           
        </div>
    );
};

export default Instagram;