import React from 'react';
import { connect } from 'react-redux'
import ColorList from '../components/ColorList';
import { rateColor, removeColor } from '../actions'

class Colors extends React.Component {
    render() {
        const { colors, onRate, onRemove } = this.props;
        
        return (
            <ColorList
                colors={colors}
                onRate={onRate}
                onRemove={onRemove}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        colors: state.colors
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRemove: (id) => dispatch(removeColor(id)),
        onRate: (id, rating) => dispatch(rateColor(id, rating))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Colors)