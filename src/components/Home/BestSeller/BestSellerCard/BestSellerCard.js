import React from 'react';
import'./BestSellerCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
const BestSellerCard = (props) => {

    const data = props.seller;
    return (
        <div className='product-item col-lg-3  col-md-4 col-sm-6'>
            <div className='product mb-30 relative'>
                <div className='img-product relative'>
                    <img className='original' src={data.imgUrl} alt=""/>
                    <img className='hover-img' src={data.imgUrl1} alt=""/>
                    <div className='hover-icon'>
                    <ul>
                        <li className='select-options'>
                            
                            
                            <span title='Select Options' data-placement='top'><FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon></span> 
                        </li>
                        <li className='quickview'>
                            
                            <span title='QuickView'><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></span> 
                        </li>
                        <li className='add-to-wishlist'>
                            
                            <span title='Add to WishList'><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></span> 
                        </li>
                    </ul>
                    
                </div>
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