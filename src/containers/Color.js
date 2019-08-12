import React from 'react';
import ColorList from '../components/ColorList';
import { connect } from 'react-redux';
import { removeColor, rateColor } from '../actions/colors';

class Color extends React.Component {
    render() {
        const { colors, onRemove, onRate } = this.props;
        return (
            <ColorList
                colors={colors}
                onRemove={onRemove}
                onRate={onRate}
            />
        )
    }
}

const mapStateToProps = ({ colors }) => {
    return {
        colors: colors
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRemove: (id) => dispatch(removeColor(id)),
        onRate: (id, rating) => dispatch(rateColor(id, rating)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color);
