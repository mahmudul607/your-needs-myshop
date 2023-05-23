import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import '../TopCarousel/owl.carousel.css';
import '../TopCarousel/owl.theme.default.css';
import bg1 from './images/HD-wallpaper-lemon-3d-food-fruits-slice-yellow-leaf.jpg';
import bg2 from './images/bg3.webp';
import bg3 from './images/mandarin-fruits-on-tree-background-260nw-284803196.webp'
import './TopCarousel.css'
const TopCarousel = () => {

    const options = {
        items: 1,
        nav: true,
        rewind: true,
        autoplay: false
    };
     
   
    return (
            <OwlCarousel  options={options}>
                <div className='item1'>
                  <div className='carousel-text'>
                  <h3>Sepecial Offer</h3>
                    <h2>Good Things
                        <br/>
                        Come Your Needs MyShop.
                    </h2>
                    <p>The sale will take place this week.</p>
                    <button type="">Shop Now</button>
                  </div>
                </div>
                <div className='item2'>
                <div className='carousel-text'>
                  <h3>Sepecial Offer</h3>
                    <h2>Good Things
                        <br/>
                        Come Your Needs MyShop.
                    </h2>
                    <p>The sale will take place this week.</p>
                    <button type="">Shop Now</button>
                  </div>
                </div>
                <div className='item3'>
                <div className='carousel-text'>
                  <h3>Sepecial Offer</h3>
                    <h2>Good Things
                        <br/>
                        Come Your Needs MyShop.
                    </h2>
                    <p>The sale will take place this week.</p>
                    <button type="">Shop Now</button>
                  </div>
                </div>
                
            </OwlCarousel>
    );
    }

export default TopCarousel;