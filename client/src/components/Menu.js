import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeroImage from './HeroImage';
import WeekMenu from './menuComponents/WeekMenu';
import DailyRecipe from './menuComponents/DailyRecipe';
import moment from 'moment';
import { changeDay, fetchMenu } from '../actions';

import '../styles/menu.css';

class Menu extends Component {
	componentDidMount() {
		let today = moment().format('dddd');
		let day;
		switch (today) {
			case 'Monday':
				day = 0;
				break;
			case 'Tuesday':
				day = 1;
				break;
			case 'Wednesday':
				day = 2;
				break;
			case 'Thursday':
				day = 3;
				break;
			case 'Friday':
				day = 4;
				break;
			case 'Saturday':
				day = 5;
				break;
			case 'Sunday':
				day = 6;
				break;
			default:
				day = null;
				break;
		}
		this.props.changeDay(day);
		this.props.fetchMenu();
	}
	changeDay = day => {
		this.props.changeDay(day);
	};
	render() {
		return (
			<div className="menu-page">
				<HeroImage
					image="https://images.unsplash.com/photo-1514573308375-84a13ac77f42?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3295a9726837a2bb98c40919a0e7021&auto=format&fit=crop&w=1296&q=60"
					title="Menu"
				/>
				<WeekMenu day={this.props.day} changeDay={this.changeDay} />
				<DailyRecipe
					recipe={this.props.menu ? this.props.menu[this.props.day] : null}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log('state redux', state);
	return {
		day: state.menu.day,
		menu: state.menu.menu
	};
}
export default connect(mapStateToProps, { changeDay, fetchMenu })(Menu);
