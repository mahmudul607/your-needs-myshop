import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import '../Carousel2/owl.carousel.css';
import '../Carousel2/owl.theme.default.css';
import './Carousel2.css'


const Carousel2 = () => {

    const options = {
        items: 4,
        nav: true,
        rewind:true,
        autoplay: false,
        loop:true
    };
    
     
   
    return (
            <OwlCarousel className='carousel2 owl-carousel' options={options}>
           
              <div className='item-box'>
             
             
              <div className='item1 icon'>
                
                <div className='carousel-text'>
                
                
              
                </div>
              </div>
                </div>
              <div className='item-box'>
              <div className='item2 icon'>
                
                <div className='carousel-text'>
                
                
              
                </div>
              </div>
                </div>
              <div className='item-box'>
              <div className='item3 icon'>
                
                <div className='carousel-text'>
                
                
              
                </div>
              </div>
                </div>
                
               
       
                
                
            </OwlCarousel>
    );
    }

export default Carousel2;