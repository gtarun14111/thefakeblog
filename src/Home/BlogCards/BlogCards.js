import React from 'react';
import './BlogCards.css';
import BlogCard from './BlogCard';

const BlogCards = ({ totalBlogs }) => {
	totalBlogs = totalBlogs.blogs;
	return (
		<div className= "center">
			{
				totalBlogs.map(card => {
					return (
						<BlogCard

						key = {Math.random()}
						src = {`https://picsum.photos/1500/1500/`}
						card = {card}
						>
						</BlogCard>
					)
				})
			}
		</div>
		);
}


export default BlogCards;