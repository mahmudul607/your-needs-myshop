import React from 'react';
import logo from '../../foody-1.png';
import {  FaCcDiscover, FaCcPaypal, FaCcVisa, FaCreditCard, FaDribbble, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
           <div className='row first-row'>
           <div className='bottom-logo col-lg-3 col-md-12 col-sm-12'>
                <img src={logo} alt=""/>
                <p>Sophisticated simplicity for the
                   <br/> independent mind.</p>
                <ul className='d-flex bottom-logo-social-icon'>
                    <li><FaFacebook/></li>
                    <li><FaInstagram/></li>
                    <li><FaTwitter/></li>
                    <li><FaLinkedin/></li>
                    <li><FaDribbble/></li>
                </ul>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-12'>
                    <div className='footer-info'>
                        <div className='footer-title'>
                            <h3 className='info_title'>Help & Information</h3>
                        </div>
                        <ul className='footer-info-ul'>
                            <li>About Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Products Return</li>
                            <li>Wholesale Policy</li>
                        </ul>
                        
                    </div>
                    
                </div>
                <div className='col-lg-3 col-md-4 col-sm-12'>
                <div className='footer-info'>
                        <div className='footer-title'>
                            <h3 className='info_title'>About us</h3>
                        </div>
                        <ul className='footer-info-ul'>
                            <li>Pagination</li>
                            <li>Terms & Conditions</li>
                            <li>Contact</li>
                            <li>Accessories</li>
                            <li>Home Page</li>
                        </ul>
                        
                    </div>
                    
                </div>
                <div className='col-lg-3 col-md-4 col-sm-12'>
                <div className='footer-info'>
                        <div className='footer-title'>
                            <h3 className='info_title'>Categories</h3>
                        </div>
                        <ul className='footer-info-ul'>
                            <li>Menu items</li>
                            <li>Help Center</li>
                            <li>Address Store</li>
                            <li>Privacy Policy</li>
                            <li>HomePage</li>
                        </ul>
                        
                    </div>
                    
                </div>

            
           </div>
           <div className='row copyright  d-flex'>
            <div className='col-lg-6 col-md-6 text-lg-left text-md-left'>
                <p>@ Copyright 2023 |  
                    <a href="https://github.com/mahmudul607"> MyShop</a> By
                    <a href="https://github.com/mahmudul607"> Ms-Tech</a>
                </p>
            </div>
            <div className='col-lg-6 col-md-6 text-lg-right text-md-right'>
                  <ul className='d-flex paymethods'>
                <li><FaCcVisa/></li>
                <li><FaCcDiscover/></li>
                <li><FaCcPaypal/></li>
                <li><FaCreditCard/></li>
            </ul>
            </div>
          
           </div>
            
        </div>
    );
};

export default Footer;