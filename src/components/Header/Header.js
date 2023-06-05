import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../foody-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUserCircle } from '@fortawesome/free-regular-svg-icons'; 
import TopNavbar from '../TopNavbar/TopNavbar';



const Header = (props) => {
  const [isSticky, setIsSticky] = useState(false);
  const {cart} = props;

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY >= 200;
      setIsSticky(isScrolling);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header row ${isSticky ? 'sticky-top' : ''}`}>
      <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3 header-logo-area'>
        <img src={logo} alt=""/>
      </div>
      <div className='col-lg-5 col-md-5 col-sm-5 nav-area'>
 
    <TopNavbar></TopNavbar>
      </div>

      <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3'>
        <ul className='d-grid header-user-area'>
          <li ><FontAwesomeIcon icon={faSearch} /></li>
          <li><FontAwesomeIcon icon={faUserCircle} /></li>
          <li className='top-heart'><FontAwesomeIcon icon={faHeart}/><span>{cart.length}</span></li>
          <li><FontAwesomeIcon icon={faCartShopping} /></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
