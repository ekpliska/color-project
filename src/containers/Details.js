import { connect } from 'react-redux';
import ColorDetails from '../components/ColorDetails';
import { findById } from '../common/findById';

const mapStateToProps = (state, props) => {
    return {
        state: findById(state.colors, props.match.params.id)
    }
}

export const Details = connect(mapStateToProps)(ColorDetails)