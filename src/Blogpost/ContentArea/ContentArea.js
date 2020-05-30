import React from 'react';


const ContentArea = ({ blog }) => {

  return (
  	<div className= "ContentArea">
    	<div className="Heading"> {blog.heading}
      </div>
      <br />
      <br />
      <div className="Body">
        {blog.content}</div>
      <div className="Quotes">
      </div>
    </div>
  );
}

export default ContentArea;