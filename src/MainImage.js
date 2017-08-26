import React from 'react';
import './MainImage.css';


function MainImage(props){
	return(
		<div id="main-image">
			<img src={props.imagesrc} alt=""/>
		</div>
	);
}

export default MainImage;