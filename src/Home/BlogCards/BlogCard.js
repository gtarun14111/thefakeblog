import React, { Fragment } from 'react';
import './BlogCard.css';

const BlogCard = ({ src, card }) => {

  return (
  	<div>
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
    </div>
  );
}

export default BlogCard;