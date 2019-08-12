import React from 'react';
import ColorList from '../components/ColorList';
import { connect } from 'react-redux';
import { removeColor } from '../actions/colors';

class Color extends React.Component {
    render() {
        const { colors, onRemove } = this.props;
        return (
            <ColorList
                colors={colors}
                onRemove={onRemove} />
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
        onRemove: (id) => dispatch(removeColor(id))
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color);
