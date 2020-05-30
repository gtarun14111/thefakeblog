import React from 'react';
import './BlogCards.css';
import BlogCard from './BlogCard';

const BlogCards = ({ totalBlogs, blogSelection }) => {
	console.log(blogSelection);
	totalBlogs = [].concat(totalBlogs);
	totalBlogs.shift();
	let cardArr = [{
		heading: "",
		content: ""
	},
	{
		heading: "tg",
		content: "'dan"
	}].concat(totalBlogs);
	cardArr.shift();

	return (
		<div className= "center">
			{
				cardArr.map(card => {
  console.log(card.blogId);
					return (
						<BlogCard

						key = {Math.random()}
						src = {`https://picsum.photos/1500/1500/`}
						card = {card}
						blogSelection = {blogSelection}
						onClick={blogSelection(card.blogId)}
						>
						</BlogCard>
					)
				})
			}
		</div>
		);
}

export default BlogCards;