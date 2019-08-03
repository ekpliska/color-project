import C from '../constants';

export default removeColor = (id) => ({
    type: C.REMOVE_COLOR,
    id: id
});
