import React from 'react';
import Comment from './Comment';
import AddComment from './AddComment';

const CommentArea = ({ props }) => {
  const { blog, 
      addCommentHeading,
      addCommentBody,
      addCommentator,
      addCommentItem,
      cmnt,
      cmntHead,
      cmntBody
         } = props;
  console.log(props);
  const commentList = [].concat(cmnt);
  commentList.shift();
  console.log(commentList);
  const cArr = [].concat(commentList);
  return (
  	<div
    className = "CommentArea"
    >
    <div className="Heading"> Comment Section</div>
    <AddComment 
    addCommentBody = {addCommentBody}
    addCommentHeading = {addCommentHeading} 
    addCommentItem = {addCommentItem}
    cmntHead = {cmntHead}
    cmntBody = {cmntBody}
    />
    {
      cArr.map(item => {
        return (
          <Comment
          key={Math.random()}
          commentator = {item.commentator}
          comment = {item} 
          />
        )
      })
    }    	
    </div>
  );
}

export default CommentArea;