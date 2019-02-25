import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<div>
				<AppBar position="static">
					<Toolbar>
						<IconButton color="inherit" aria-label="Menu" />
						<Typography variant="h6" color="inherit" align="center">
							NEIGHBOR-GOOD
						</Typography>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default Header;
