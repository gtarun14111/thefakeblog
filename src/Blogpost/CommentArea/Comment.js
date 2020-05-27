import React from 'react';
import './Comment.css';

const Comment = ({commentator, comment}) => {
  return (
    <div
    className = "cmnt">
      <div className= "commentbody">
        <div
        className = "caption"
        >
          {comment.caption}
        </div>
        {comment.body}
      </div>
      <div className = "commentator">
        {commentator}
      </div>
    </div>
  );
}

export default Comment;