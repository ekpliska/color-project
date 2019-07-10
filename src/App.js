import React from 'react';
import './App.css';
import AddColorForm from './components/AddColorForm';
import ColorList from './components/ColorList';
import MemberList from './components/Member/MemberList';
import HiddenMessages from './components/HiddenMessage/HiddenMessages';
import CountryList from './components/CountyList/CountryList';
import RandomMeUsers from './components/PeopleList/RandomMeUsers';

class App extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			colors: [
				{
					'id': '1',
					'title': 'Ocean at dusk',
					'color': '#00c4e2',
					'rating': 5
				},
				{
					"id": "2",
					"title": "Lawn",
					"color": "#26ac56",
					"rating": 3
				},
				{
					"id": "3",
					"title": "Bright red",
					"color": "#ff0000",
					"rating": 0
				},
			]
		}

		this.addColor = this.addColor.bind(this);
		this.rateColor = this.rateColor.bind(this);
		this.removeColor = this.removeColor.bind(this);
	}

	addColor(title, color) {
		const colors = [
			...this.state.colors,
			{
				'id': '4',
				'title': title,
				'color': color,
				'rating': 0
			}
		]
		this.setState({ colors });
	}

	rateColor(id, rating) {
		const colors = this.state.colors.map(color => {
			return (
				(color.id !== id) ?
					color : {
						...color,
						rating
					}
			)
		})
		this.setState({colors})
	}

	removeColor(id) {
		const colors = this.state.colors.filter(
			color => color.id !== id
		)
		this.setState({colors})
	}

	render() {

		const { colors } = this.state;

		return (
			<div>
				<AddColorForm onNewColor={this.addColor} />
				<ColorList colors={colors}
					onRate={this.rateColor}
					onRemove={this.removeColor}
				/>
				<br />
				<RandomMeUsers count={10} />
				{/* <MemberList count={3} /> */}
				{/* <CountryList /> */}
			</div>			
		)
	}
}

export default App;
