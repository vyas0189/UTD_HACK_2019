import React, { Component } from 'react';
import Header from './components/Header';
import Leaf from './components/Leaf.js';
import Search from './components/SearchAppBar';
class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Search />
				<Leaf />
			</div>
		);
	}
}

export default App;
