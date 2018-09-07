import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMenu } from '../actions';
import HeroImage from './HeroImage';
import Ingredient from './ingredientComponents/Ingredient';
import _ from 'lodash';

import '../styles/shopping-list.css';

class ShoppingList extends Component {
	componentDidMount() {
		this.props.fetchMenu();
	}
	renderContent() {
		const result = _.map(this.props.menu, (value, key) => {
			if (value) {
				return <Ingredient key={key} data={value.ingredients} />;
			}
		});
		return result;
	}
	render() {
		return (
			<div>
				<h3>Shopping List</h3>
				{this.renderContent()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		menu: state.menu.menu
	};
}
export default connect(mapStateToProps, { fetchMenu })(ShoppingList);
