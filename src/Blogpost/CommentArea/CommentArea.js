import React from 'react';
import Comment from './Comment';
import AddComment from './AddComment';

const CommentArea = ({ props }) => {
  const {
      addCommentHeading,
      addCommentBody,
      addCommentItem,
      blog,
      cmntHead,
      cmntBody,
      commentator
         } = props;
  let cArr = [].concat(blog.cmnts);
  if(cArr[0] === undefined) {
    cArr = false;
  }
  const url = String(window.location.href);
  const address = url.substring(32);

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
    commentator = {commentator}
    address = {address}
    />
    {
      cArr ? (
      cArr.map(item => {
        return (
          <Comment
          key={Math.random()}
          comment = {item} 
          />
        )
      })
      )
      :
      (
        <div>
          There are no Commment! Be the first commentator
        </div>
        )
    }    	
    </div>
  );
}

export default CommentArea;