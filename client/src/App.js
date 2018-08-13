import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import Landing from './components/Landing';
import Header from './components/Header';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		return (
			<div>
				<Header/>
				<BrowserRouter>
					<div>
						<Route path="/" component={Landing} exact />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);