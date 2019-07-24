import React from 'react';
import './App.css';
import AddColorForm from './components/AddColorForm';
import ColorList from './components/ColorList';
import RandomMeUsers from './components/PeopleList/RandomMeUsers';

const App = ({ store }) => {
	return (
		<div>
			<AddColorForm store={store} />
			<ColorList store={store} />
		</div>
	)
}

export default App;

// export default class App extends React.Component {

// 	constructor(props) {
// 		super(props);

// 		this.state = this.props.store.getState();

// 		this.addColor = this.addColor.bind(this);
// 		this.rateColor = this.rateColor.bind(this);
// 		this.removeColor = this.removeColor.bind(this);
// 	}

// 	addColor(title, color) {
// 		const colors = [
// 			...this.state.colors,
// 			{
// 				'id': '4',
// 				'title': title,
// 				'color': color,
// 				'rating': 0
// 			}
// 		]
// 		this.setState({ colors });
// 	}

// 	rateColor(id, rating) {
// 		const colors = this.state.colors.map(color => {
// 			return (
// 				(color.id !== id) ?
// 					color : {
// 						...color,
// 						rating
// 					}
// 			)
// 		})
// 		this.setState({colors})
// 	}

// 	removeColor(id) {
// 		const colors = this.state.colors.filter(
// 			color => color.id !== id
// 		)
// 		this.setState({colors})
// 	}

// 	render() {

// 		const { colors } = this.state;

// 		return (
// 			<div>
// 				<AddColorForm onNewColor={this.addColor} />
// 				<ColorList colors={colors}
// 					onRate={this.rateColor}
// 					onRemove={this.removeColor}
// 				/>
// 				<br />
// 				<RandomMeUsers count={10} />
// 				{/* <MemberList count={3} /> */}
// 				{/* <CountryList /> */}
// 			</div>			
// 		)
// 	}
// }