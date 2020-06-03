import React, { Fragment } from 'react';
import './BlogCard.css';
import { Link } from "react-router-dom"; 

const BlogCard = ({ src, card }) => {
  return (
  	<div>
    <Link to={`/Blogpost/:${card.blogId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
  	<button className = "Bcard">
  			<Fragment>
        <div>
          <img 
    			src = {src}  
    			className = "BCardimg"
    			alt="There should have been something here"/>
        	<figcaption>{card.heading}</figcaption>
          </div>
        </Fragment>
        <Fragment>
        <div className = "BCardContent">
          {card.content}
          </div>
        </Fragment>
    	</button>
      </Link>
    </div>
  );
}

export default BlogCard;