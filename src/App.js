import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Color from './containers/Color';
import NewColor from './containers/NewColor';

class App extends React.Component {
	render() {
		return (
			<div>
				<NewColor />
				<Color  />
			</div>
		)
	}
}

export default connect()(App);