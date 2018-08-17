import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import Landing from './components/Landing';
import Header from './components/Header';
import Home from './components/Home';
import Recipies from './components/Recipies';
import Menu from './components/Menu';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		return (
			<div>
				<Header />
				<BrowserRouter>
					<div>
						<Route path="/" component={Landing} exact />
						<Route path="/main" component={Home} exact />
						<Route path="/search-recipies" component={Recipies} exact />
						<Route path="/menu" component={Menu} exact />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
