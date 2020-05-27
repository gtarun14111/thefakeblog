import React from 'react';
import Comment from './Comment';

const CommentArea = (props) => {
  const cArr = [ {
    commentator: "Mohit",
    comment: {
      caption: "Great Work",
      body: "This is a nice website"
    }
  },
  {
    commentator: "Luv",
    comment: {
      caption: "Suggestion!",
      body: "Dimaag se soch!"

    }
  },
  {
    commentator: "Ruddraksh",
    comment: {
      caption: "kya hai ye?",
      body: "Ye sab mujhe smjh nhi ata par jaisa bhi h theek h."
    }
  }
  ]
  return (
  	<div
    className = "CommentArea"
    >
    <div className="Heading"> Commention Section</div>
    {
      cArr.map(cmnt => {
        return (
          <Comment
          commentator = {cmnt.commentator}
          comment = {cmnt.comment} 
          />
        )
      })
    }    	
    </div>
  );
}

export default CommentArea;