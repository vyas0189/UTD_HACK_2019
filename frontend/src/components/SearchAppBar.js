import React, { Component } from 'react';
import '../App.css';
class SearchAppBar extends Component {
	state = {
		zip: 0
	};

	handleChange = (e) => {
		e.preventDefault();
		this.setState({
			zip: e.target.value
		});
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		console.log('Hitting ');
		const res = await fetch(`https://backend-mognmvipxm.now.sh/${this.state.zip}`);
		const data = await res.json();
		console.log(data);
	};
	render() {
		return (
			<form className="form" onSubmit={this.handleSubmit}>
				<input
					name="state"
					className="email"
					placeholder="ZIP Code"
					required
					autoComplete="off"
					onChange={this.handleChange}
				/>
				<button id="arrow">
					<i className="fas fa-arrow-right fa-2x fa_custom" />
				</button>
			</form>
		);
	}
}

export default SearchAppBar;
