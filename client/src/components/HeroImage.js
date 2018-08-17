import React from 'react';

const HeroImage = ({ image, title }) => {
	var styles = {
		background: `url(${image})`,
		width: 100 + '%',
		backgroundSize: 'cover',
		height: 19 + 'rem'
	};
	return (
		<div style={styles} className="hero">
			<h1 className="hero-title">{title}</h1>
		</div>
	);
};

export default HeroImage;
