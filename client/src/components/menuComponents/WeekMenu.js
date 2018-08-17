import React from 'react';

const WeekMenu = ({ day, changeDay }) => {
	const week = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
	this.renderDays = day => {
		return week.map((item, index) => {
			return (
				<span
					key={index}
					onClick={() => changeDay(index)}
					className={day === index ? 'day day-active' : 'day day-not-active'}>
					{item}
				</span>
			);
		});
	};
	return <div className="week-container">{this.renderDays(day)}</div>;
};

export default WeekMenu;
