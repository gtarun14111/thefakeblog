import React from 'react';
import './BlogAdder.css';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
	paper: {
		margin: "3vw"
	}
}));

const BlogAdder = ({ addBlogHeading, addBlogContent, addBlogAuthor, addBlogItem, author }) => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
	setOpen(true);
	};

	const handleClose = () => {
	setOpen(false);
	};
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
				<input type="text" 
				placeholder="give your blog a heading" 
				onChange = {addBlogHeading}
				
				/>
				<textarea placeholder="theydo" onChange = {addBlogContent}/>
				<div>
				<Button variant = "contained" color="primary"
				onClick = {function(event){
					addBlogAuthor(author)(event);
					addBlogItem(event);
					handleClickOpen();
				}
				}
				> Submit
				</Button>
				      <Dialog
				        open={open}
				        onClose={handleClose}
				        aria-labelledby="alert-dialog-title"
				        aria-describedby="alert-dialog-description"
				      >
				        <DialogTitle id="alert-dialog-title">{"Blog saved"}</DialogTitle>
				        <DialogContent>
				          <DialogContentText id="alert-dialog-description">
				            Your Blog has been saved! Hope you will write more in future!
				          </DialogContentText>
				        </DialogContent>
				        <DialogActions>
				          <Button onClick={handleClose} color="primary" autoFocus>
				            Okay
				          </Button>
				        </DialogActions>
				      </Dialog>
				<Button variant = "contained" color="primary"> Clear Everything</Button>
				<Button variant = "contained" color="primary"> Back</Button>
				</div>
			</div></Paper>


		</div>
		);
}

export default BlogAdder;