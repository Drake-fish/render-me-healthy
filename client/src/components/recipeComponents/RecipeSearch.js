import React, { Component } from 'react';

class RecipeSearch extends Component {
	handleSearch = e => {
		const { fetchRecipies } = this.props;
		e.preventDefault();
		let searchTerm = document.getElementById('recipe-search').value;
		console.log(searchTerm);
		fetchRecipies({ query: searchTerm });
	};
	render() {
		return (
			<div className="search-container">
				<form onSubmit={this.handleSearch}>
					<i className="fa fa-search" aria-hidden="true" />
					<input id="recipe-search" type="text" placeholder="Search" />
				</form>
			</div>
		);
	}
}

// const RecipeSearch = ({ fetchRecipies }) => {
// 	const handleSearch = e => {
// 		e.preventDefault();
// 		let searchTerm = document.getElementById('recipe-search').value;
// 		console.log(searchTerm);
//
// 	};
// 	return (
//
// 	);
// };

export default RecipeSearch;
