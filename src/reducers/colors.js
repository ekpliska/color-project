import C from '../constants';

export const colors = (state = [], action) => {
    switch (action.type) {
        case C.ADD_COLOR:
            return [
                ...state,
                color({}, action)
            ];
        case C.RATE_COLOR:
            return state.map(c => color(c, action));
        case C.REMOVE_COLOR:
            return state.filter(c => c.id !== action.id)
        default:
            return state;
    }
}