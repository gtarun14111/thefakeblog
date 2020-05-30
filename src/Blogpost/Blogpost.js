import React from 'react';
import ContentArea from './ContentArea/ContentArea';
import './Blogpost.css';
import CommentArea from './CommentArea/CommentArea';
import BlogImage from './BlogImage/BlogImage';


const Blogpost = (props) => {

  return (
  	<div 
  	className = "blog">
  			<BlogImage />
			<ContentArea blog={props.blog} />
			<CommentArea props = {props}/>
    </div>
  );
}

export default Blogpost;