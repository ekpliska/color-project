import React from 'react';
import { connect } from 'react-redux';
import './App.css';
// import AddColorForm from './components/AddColorForm';
// import Menu from './containers/Menu';
import Color from './containers/Color';

class App extends React.Component {
	render() {
		return (
			<div>
				{/* <Menu />
				<AddColorForm /> */}
				<Color />
			</div>
		)
	}
}

export default connect(null, null)(App);