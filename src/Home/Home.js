import React from 'react';
import HeadImg from './HeadImage/HeadImage';
import BlogCards from './BlogCards/BlogCards';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';


const Home = ({ email, blog, blogSelection }) => {
  console.log(blogSelection);
	console.log(blog);
  return (
    <div>
      <HeadImg />
      {
    	email === "gtarun14111@gmail.com" ? (
    			<div>
    				<Button
            variant="contained"
            color="primary"
            size= "large"
    				>
    					<Link
    					to="/blogAdder">
    					Add Blog
    					</Link>
    				</Button>
    			</div>
    			) : <div></div>
	}	
      <BlogCards 
      totalBlogs = {blog}
      blogSelection = {blogSelection}
      />
    </div>
  );
}

export default Home;
