import React from 'react';
import './Product.css'
import topimg from '../Home/img/bg2.jpg';
import ProductCard from '../ProductCard/ProductCard';
import fakeData from '../../fakeData';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
const Product = (props) => {

    const product = fakeData;
    return ( 
        <>
        <div className='topimg-area'>
            <img src={topimg} alt=""/>
          <div className=' top-text-img'>
      
            <h2>Product</h2>
        
          <div className='topimg-text'>
               <Link className='home-quick-nav' to="../Home">Home</Link>
               
               <Link to="../Product">Product</Link>
            </div>
            
          </div>
        </div>
        <div className='filter-area row'>
            <div className='col-lg-6 col-md-6 col-sm-6 filter'>
                <h3><FontAwesomeIcon icon={faFilter}></FontAwesomeIcon> Filter</h3>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6 sorting'>
                <div className='change_prod'>
                    <div className='change_collum'>
                        <div className='icon_change'>
                            
                        </div>
                        
                    </div>
                    
                </div>
                <div className='sorting-elements'>
                    <div className='sorting-style-area'>
                        <div className='dropdown'>
                            
                        </div>
                        <Button>Default Sorting</Button>


                        
                    </div>
                    
                </div>
                
                
            </div>
            
            
        </div>
        <div className='product-area'>
             {product.map(pd => <ProductCard pd={pd} handleAddProduct={props.handleAddProduct}></ProductCard>)}
        </div>
        </>
    );

    };

export default Product;