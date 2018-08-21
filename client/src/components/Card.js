import React from 'react';

const Card = ({ name, link, i }) => {
	return (
		<a href={link}>
			<div className={`card card${i}`}>
				<h3 className="card-title">{name}</h3>
			</div>
		</a>
	);
};

export default Card;
