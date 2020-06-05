import React from 'react';
import './AddComment.css';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const AddComment = ({ addCommentBody, addCommentHeading, commentator, addCommentItem, cmntHead, cmntBody, address }) => {
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
  setOpen(true);
};

  const handleClose = () => {
  setOpen(false);
  };

	return (
		<Paper 
		elevation = {24}
		className= "commentAdder">
		<div >
		<div className="cmntAddTitle">
			Add Comment
		</div>
		<div className="cmntHead">
			<label className="labelCmntHead">Heading!</label>
			<input
			className="headingCmntAdd" 
			placeholder="I like only short headings"
			onChange = {addCommentHeading}
			value = {cmntHead}
			/>
		</div>
		<div className="cmntBody">
			<label>Comment Body</label>
			<textarea
			className="textCmntAdd"
			onChange = {addCommentBody}
			value = {cmntBody}
			></textarea>
		</div>
			<button className="buttonCmntAdd"
			onClick={function() {
				if(commentator) {
				addCommentItem(address)(
				commentator,
				cmntBody,
				cmntHead)();
			}
			else {
				handleClickOpen();
			}

				}	
			}
			
			> Click me to comment! </button>
			<Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title">
                	Sorry!
                </DialogTitle>
                
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                  You need to login to comment
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary" autoFocus>
                    Okay!
                  </Button>
                </DialogActions>
              
              </Dialog>
		</div>
		</Paper>
		)
}

export default AddComment;