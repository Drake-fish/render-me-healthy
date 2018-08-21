import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeroImage from './HeroImage';
import Card from './Card';
import { createMenu } from '../actions';

import '../styles/home.css';

const buttons = [
	{ name: 'Menu', link: '/menu' },
	{ name: 'Discover', link: '/search-recipies' },
	{ name: 'Saved', link: '/saved-recipies' },
	{ name: 'Shopping List', link: '/shopping-list' },
	{ name: 'Build', link: '/build' }
];
class Home extends Component {
	componentDidMount() {
		this.props.createMenu();
	}
	renderMenuOptions() {
		return buttons.map((button, i) => {
			return <Card i={i} name={button.name} link={button.link} />;
		});
	}
	render() {
		return (
			<div className="home">
				<HeroImage image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e0245bb4e87077312cc3d102e68c1efd&auto=format&fit=crop&w=900&q=60" />
				<div className="home-buttons">{this.renderMenuOptions()}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { auth: state.auth };
}

export default connect(mapStateToProps, { createMenu })(Home);
