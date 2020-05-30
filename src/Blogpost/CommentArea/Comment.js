import React from 'react';
import './Comment.css';

const Comment = ({commentator, comment}) => {
  console.log(commentator);
  console.log(comment);
  
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