import React from 'react';
import fetch from 'isomorphic-fetch';
import { render } from 'react-dom';

function DataComponent (ComposedComponent, url) {
    return class DataComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [],
                loaded: false,
                loading: false
            }
        }

        componentWillMount() {            
            this.setState({
                loading: true
            });

            fetch(url)
                .then(response => response.json())
                .then(obj => obj.results)
                .then(data => this.setState({
                    loaded: true,
                    loading: false,
                    data
                }));            
        }

        render() {
            console.log(this.state);
            
            return (
                <div className="data-component">
                    {
                        (this.state.loading) ?
                            <div>Loading...</div> :
                            <ComposedComponent {...this.state} {...this.props} />
                    }
                </div>
            )
        }
    }
}

export default DataComponent;