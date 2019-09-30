import { connect } from 'react-redux';
import ColorDetails from '../components/ColorDetails';
import { findById } from '../common/findById';

export const Details = connect(
    ({ colors }, { match }) => findById(colors, match.params.id)
)(ColorDetails)