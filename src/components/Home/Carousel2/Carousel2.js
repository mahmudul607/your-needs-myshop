import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import '../Carousel2/owl.carousel.css';
import '../Carousel2/owl.theme.default.css';
import './Carousel2.css'
const Carousel2 = () => {

    const options = {
        items: 3,
        nav: true,
        rewind:true,
        autoplay: true,
        loop:true
    };
     
   
    return (
            <OwlCarousel  options={options}>
                <div className='item1'>
                  <div className='carousel-text'>
                  
                  
                  </div>
                </div>
                <div className='item2'>
                <div className='carousel-text'>
                 
                  </div>
                </div>
                <div className='item3'>
                <div className='carousel-text'>
                  
                  </div>
                </div>
                <div className='item1'>
                  <div className='carousel-text'>
                  
                  
                  </div>
                </div>
                <div className='item2'>
                <div className='carousel-text'>
                 
                  </div>
                </div>
                <div className='item3'>
                <div className='carousel-text'>
                  
                  </div>
                </div>
                <div className='item1'>
                  <div className='carousel-text'>
                  
                  
                  </div>
                </div>
                <div className='item2'>
                <div className='carousel-text'>
                 
                  </div>
                </div>
                <div className='item3'>
                <div className='carousel-text'>
                  
                  </div>
                </div>
                <div className='item1'>
                  <div className='carousel-text'>
                  
                  
                  </div>
                </div>
                <div className='item2'>
                <div className='carousel-text'>
                 
                  </div>
                </div>
                <div className='item3'>
                <div className='carousel-text'>
                  
                  </div>
                </div>
                
            </OwlCarousel>
    );
    }

export default Carousel2;