import React from 'react';
import './ProductCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-regular-svg-icons';


const ProductCard = (props) => {
  

    return (
        <div className='product-item col-lg-3  col-md-4 col-sm-6'>
            <div className='product mb-30 relative'>
                <div className='img-product relative'>
                    <img className='original' src={props.pd.imgUrl} alt=""/>
                    {/* <img className='hover-img' src={product.imgUrl1} alt=""/> */}
                    <div className='hover-icon'>
                    <ul>
                        <li className='select-options'>
                            <span title='Select Options' data-placement='top'><FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon></span> 
                        </li>
                        <li className='quickview'>
                            
                            <span title='QuickView'><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></span> 
                        </li>
                        <li className='add-to-wishlist'
                          onClick={() =>
                            props.handleAddProduct(props.pd)
                          }
                        >
                            
                            <span title='Add to WishList' 
                           
                            ><FontAwesomeIcon icon={faHeart} ></FontAwesomeIcon></span> 
                        </li>
                    </ul>
                    
                    
                </div>
                </div>
                
                <div className='seller-text'>
                <h5 className='des-font capital title-product'>{props.pd.title}</h5>
                <h4 className='price-area'>$ {props.pd.price}</h4>
                </div>
            
                
            </div>
            
        </div>
    );
};

export default ProductCard;