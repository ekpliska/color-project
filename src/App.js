import React from 'react';
import './App.css';
import AddColorForm from './components/AddColorForm';
import Menu from './containers/Menu';
import Colors from './containers/Colors';

const App = () => {
	return (
		<div>
			<Menu />
			<AddColorForm />
			<Colors />
		</div>
	)
}

export default App;