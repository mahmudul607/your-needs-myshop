import React from 'react';
import './OurBlogs.css';
import blog1 from '../img/blog1.jpg';
import blog2 from '../img/blog2.jpg';
import blog3 from '../img/blog3.jpg';
import BlogCard from '../BlogCard/BlogCard';
const OurBlogs = () => {

    const MyBlogs =[
        {
        img:blog1,
        key:1,
        blogCate:'News',
        blogTitle:'I am fruits Lover',
        content:"When I was a child, I like to eat everyday fruits, when my father and mother don't want to give me a fruits than crying for my favorite fruit"
    },
        {
        img:blog2,
        key:2,
        blogCate:'News',
        blogTitle:'Mu Childhood Love',
        content:"When I was a child, I like to eat everyday fruits, when my father and mother don't want to give me a fruits than crying for my favorite fruit"
    },
        {
        img:blog3,
        key:3,
        blogCate:'News',
        blogTitle:'My First Love',
        content:"When I was a child, I like to eat everyday fruits, when my father and mother don't want to give me a fruits than crying for my favorite fruit"
    }
]
    return (
        <div className='text-center'>
            <h3 className='title_heading'>Our Blogs</h3>
            <div className='blog-area '>
                
                        {
                        MyBlogs.map(blg => <BlogCard blg={blg} key={blg.key}></BlogCard>)
                    }
                    
                
            </div>
            
        </div>
    );
};

export default OurBlogs;