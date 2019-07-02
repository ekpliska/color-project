import React from 'react';
import PropTypes from 'prop-types';

class AddColorForm extends React.Component {

    constructor(props) {
        super(props)
        console.log('constructor', props);
        
        this.submit = this.submit.bind(this);
    }

    submit(e) {
        const { _title, _color } = this.refs;
        e.preventDefault();
        this.props.onNewColor(_title.value, _color.value);
        _title.value = '';
        _color.value = '#000000';
        _title.focus();
        console.log('onSubmit');
    }

    render() {
        return (
            <form onSubmit={ this.submit }>
                <input ref="_title" type="text" placeholder="color title..." required />
                <input ref="_color" type="color" required />
                <button>ADD</button>
            </form>
        )
    }
}

AddColorForm.propTypes = {
    onNewColor: PropTypes.func
}

export default AddColorForm;