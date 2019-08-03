import React from 'react';
import { connect } from 'react-redux';
import AddColorForm from '../components/AddColorForm';
import { addColor } from '../actions/colors';


class NewColor extends React.Component {
    render() {
        return (
            <AddColorForm onNewColor={this.props.onNewColor} />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNewColor: (title, color) => dispatch(addColor(title, color))
    }
}

export default connect(null, mapDispatchToProps)(NewColor);
