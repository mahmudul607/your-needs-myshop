import React, { useContext } from 'react';
import'./BestSellerCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { AddProductContext } from '../../../../App';
const BestSellerCard = (props) => {

    const handleAddProduct = useContext(AddProductContext)
    
    // const handleAddProduct = props.handleAddProduct;
    return (
        <div className='product-item col-lg-3  col-md-4 col-sm-6'>
            <div className='product mb-30 relative'>
                <div className='img-product relative'>
                    <img className='original' src={props.product.imgUrl} alt=""/>
                    <img className='hover-img' src={props.product.imgUrl1} alt=""/>
                    <div className='hover-icon'>
                    <ul>
                        <li className='select-options'>
                            
                            
                            <span title='Select Options' data-placement='top'><FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon></span> 
                        </li>
                        <li className='quickview'>
                            
                            <span title='QuickView'><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></span> 
                        </li>
                        <li className='add-to-wishlist'
                            onClick={() => handleAddProduct(props.product)}
                        >
                            
                            <span title='Add to WishList'><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></span> 
                        </li>
                    </ul>
                    
                </div>
                </div>
                
                <div className='props.seller-text'>
                <h5 className='des-font capital title-product'>{props.product.name}</h5>
                <h4 className='price-area'>$ {props.product.price}</h4>
                </div>
            
                
            </div>
            
        </div>
    );
};

export default BestSellerCard;