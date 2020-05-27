import React from 'react';
import './HeadImage.css';

const HeadImg = () => {
	const blurNumber = Math.round(Math.random()*10);
	return (
		<div className="HeadContainer">
			<img 
			src = {`https://picsum.photos/1500/1500/?blur=${blurNumber}`}  
			className = "HeadImg"
			alt="There should have been something here"/>

			<div 
			className="ImageText">
			<h1> This is a fake blog!</h1>
			<h3> Support it by just reading some fake articles </h3>
			</div>
		</div>
		);
}

export default HeadImg;