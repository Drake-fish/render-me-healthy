import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/header.css';

class Header extends Component {
	state = {
		menuOpen: false
	};

	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li onClick={this.toggleMenu}>
						<a href="/auth/google">Login</a>
					</li>
				);
			default:
				return [
					<a key="menu" href="/main">
						<li onClick={this.toggleMenu}>Main</li>
					</a>,
					<a key="recipies" href="/search-recipies">
						<li onClick={this.toggleMenu}>Recipies</li>
					</a>,
					<a key="build" href="/build">
						<li onClick={this.toggleMenu}>Build Menu</li>
					</a>,
					<a key="shopping-list" href="/shopping-list">
						<li onClick={this.toggleMenu}>Shopping List</li>
					</a>,
					<a key="logout" href="/api/logout">
						<li onClick={this.toggleMenu}>Logout</li>
					</a>
				];
		}
	}

	toggleMenu = () => {
		this.setState({ menuOpen: !this.state.menuOpen });
	};

	render() {
		return (
			<div>
				<div
					onClick={this.toggleMenu}
					className={
						this.state.menuOpen ? 'modal modal-open' : 'modal modal-closed'
					}
				/>
				<div className="header" onClick={this.toggleMenu}>
					<div className="hamburger-container">
						<span className={this.state.menuOpen ? 'top-open' : 'top'} />
						<span className={this.state.menuOpen ? 'middle-open' : 'middle'} />
						<span className={this.state.menuOpen ? 'bottom-open' : 'bottom'} />
					</div>
				</div>
				<div
					className={
						this.state.menuOpen ? 'menu menu-open' : 'menu menu-closed'
					}>
					<ul className="menu-options">{this.renderContent()}</ul>
				</div>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
