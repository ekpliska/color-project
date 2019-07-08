import React from 'react';
import { render } from 'react-dom';
import fetch from 'isomorphic-fetch';

class CountryList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            countryNames: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        });
        fetch('https://restcountries.eu/rest/v1/all')
            .then(response => response.json())
            .then(json => json.map(country => country.name))
            .then(countryNames => this.setState({
                countryNames: countryNames,
                loading: false
            }));
    }

    render() {
        const { countryNames, loading } = this.state;
        return (loading) ?
            <div>Loading country names...</div> :
            (!countryNames.length) ?
                <div>No Country Names</div> :
                <ul>
                    {
                        countryNames.map((country, i) => {
                            return (
                                <li key={i}>{country}</li>
                            )
                        })
                    }
                </ul>
    }

}

export default CountryList;