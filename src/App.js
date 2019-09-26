import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Color from './containers/Color';
import NewColor from './containers/NewColor';
import ColorDetails from './components/ColorDetails';

class App extends React.Component {
	render() {
		return (
			<main>
				<div className="color-app">
					<h1 className="color-app__title">
						Color Project
					</h1>
					<NewColor />
					<Color />
					<ColorDetails />
				</div>
			</main>
		)
	}
}

export default connect()(App);