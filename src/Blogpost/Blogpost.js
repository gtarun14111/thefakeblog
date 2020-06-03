import React from 'react';
import ContentArea from './ContentArea/ContentArea';
import './Blogpost.css';
import CommentArea from './CommentArea/CommentArea';
import BlogImage from './BlogImage/BlogImage';

class Blogpost extends React.Component {

	componentDidMount() {
		const url = String(window.location.href);
		const address = url.substring(32);
		this.props.showBlogPost(address)();
		}

	render() {
  return (
  	<div 
  	className = "blog">
  			<BlogImage />
			<ContentArea blog={this.props.blog.blog} />
			<CommentArea props = {this.props}/>
    </div>
  );
}
}


export default Blogpost;