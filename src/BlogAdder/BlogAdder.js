import React from 'react';
import './BlogAdder.css';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	paper: {
		margin: "3vw"
	}
}));

const BlogAdder = () => {
	const classes = useStyles();	
	return (
		<div>
			<Paper 
			elevation={5}
			className={classes.paper}>
			<div
			className="blogwrite">
				<div
				className="heading"
				>
					Welcome, tarun, start your new blog from here
				</div>
				<input type="text" placeholder="give your blog a heading" />
				<textarea placeholder="theydo"/>
				<div>
				<Button variant = "contained" color="primary"> Submit</Button>
				<Button variant = "contained" color="primary"> Clear Everything</Button>
				<Button variant = "contained" color="primary"> Back</Button>
				</div>
			</div></Paper>


		</div>
		);
}

export default BlogAdder;