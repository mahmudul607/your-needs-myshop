import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../foody-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUserCircle } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

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
      <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4 header-logo-area'>
        <img src={logo} alt=""/>
      </div>

      <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3'>
        <ul className='d-grid header-user-area'>
          <li><FontAwesomeIcon icon={faSearch} /></li>
          <li><FontAwesomeIcon icon={faUserCircle} /></li>
          <li><FontAwesomeIcon icon={faHeart} /></li>
          <li><FontAwesomeIcon icon={faCartShopping} /></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
