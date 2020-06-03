import React from 'react';
import './AddComment.css';
import Paper from '@material-ui/core/Paper';

const AddComment = ({ addCommentBody, addCommentHeading, commentator, addCommentItem, cmntHead, cmntBody, address }) => {
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
			onClick={function() {addCommentItem(address)(
				commentator,
				cmntBody,
				cmntHead)();
				window.location.reload();
				}	
			}
			> Click me to comment! </button>
		</div>
		</Paper>
		)
}

export default AddComment;