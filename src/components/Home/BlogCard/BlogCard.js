import React from 'react';
import './BlogCard.css'
const BlogCard = (props) => {

    const blg = props.blg;
    return (
        <div  className='blog-card col-lg-3 col-md-3 col-sm-1'> 
                <div className='blog-img'>
                      <img src={blg.img} alt=""/>
                      <div className='date'>
                        <span className='day title_heading'>23</span>
                        <br/>
                        <span className='month'>Nov</span>
                      </div>
                      </div>
                      <div className='blog-text-area'>
                        <h5>{blg.blogCate}</h5>
                          <h4 className='title_heading'>{blg.blogTitle}</h4>
                          <p>{blg.content}</p>
                          
                      </div>
                  
                </div>
    );
};

export default BlogCard;