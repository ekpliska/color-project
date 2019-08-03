import React from 'react';
import ColorList from '../components/ColorList';
import { connect } from 'react-redux';

class Color extends React.Component {
    render() {
        const { colors } = this.props;
        return (
            <ColorList colors={colors} />
        )
    }
}

const mapStateToProps = ({ colors }) => {
    return {
        colors: colors.colors
    }
}

export default connect(mapStateToProps, null)(Color);
