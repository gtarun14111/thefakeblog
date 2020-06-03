import React from 'react';
import './Comment.css';

const Comment = ({comment}) => {
  
  return (
    <div
    className = "cmnt">
      <div className= "commentbody">
        <div
        className = "caption"
        >
        {comment.commentHeading}
        </div>
        {comment.commentBody}
      </div>
      <div className = "commentator">
        {comment.commentator}
      </div>
    </div>
  );
}

export default Comment;