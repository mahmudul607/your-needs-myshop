import { faEllipsis, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const HotDealCard = (props) => {
    const data = props.pd
    return (
        <div className='product-item col-lg-3 col-6 col-md-4 col-sm-2'>
<div className='product mb-30 relative'>
    <div className='img-product relative'>
        <img className='original' src={data.imgUrl} alt=""/>
        <img className='hover-img' src={data.imgUrl2} alt=""/>
        

    </div>
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
    <div className='seller-text'>
    <h5 className='des-font capital title-product'>{data.title}</h5>
    <h4 className='price-area'>$ {data.price}</h4>
    </div>

    
</div>

</div>
    );
};

export default HotDealCard;