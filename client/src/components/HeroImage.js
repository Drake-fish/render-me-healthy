import React from 'react';


const HeroImage = ({image}) => {
	var styles={
		background: `url(${image})`,
		width:100+'%',
		backgroundSize:'cover',
		height:19+'rem'

	}
	return (
		<div style={styles} className="hero">
        </div>
	);
};

export default HeroImage;
