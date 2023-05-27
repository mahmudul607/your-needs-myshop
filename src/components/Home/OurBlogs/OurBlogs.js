import React from 'react';
import './OurBlogs.css';
import blog1 from '../img/blog1.jpg';
import blog2 from '../img/blog2.jpg';
import blog3 from '../img/blog3.jpg';
const OurBlogs = () => {

    const MyBlogs =[
        {
        img:blog1,
        blogCate:'News',
        blogTitle:'I am fruits Lover',
        content:"When I was a child, I like to eat everyday fruits, when my father and mother don't want to give me a fruits than crying for my favorite fruit"
    },
        {
        img:blog2,
        blogCate:'News',
        blogTitle:'Mu Childhood Love',
        content:"When I was a child, I like to eat everyday fruits, when my father and mother don't want to give me a fruits than crying for my favorite fruit"
    },
        {
        img:blog3,
        blogCate:'News',
        blogTitle:'My First Love',
        content:"When I was a child, I like to eat everyday fruits, when my father and mother don't want to give me a fruits than crying for my favorite fruit"
    }
]
    return (
        <div className='text-center'>
            <h3 className='title_heading'>Our Blogs</h3>
            <div className='blog-area'>
              {
                MyBlogs.map(blg => <div blg={blg} className=''> 
                <div className='blog-img'>
                      <img src={blg.img} alt=""/>
                      </div>
                      <div className='blog-text-area'>
                        <h5>{blg.blogCate}</h5>
                          <h4 className='title_heading'>{blg.blogTitle}</h4>
                          <p>{blg.content}</p>
                          
                      </div>
                  
                </div>)
              }
                
            </div>
            
        </div>
    );
};

export default OurBlogs;