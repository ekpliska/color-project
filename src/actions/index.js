import C from '../constants';

export const addColor = (title, color) => ({
    type: C.ADD_COLOR,
    id: +Date.now(),
    title,
    color,
    timestamp: new Date().toDateString
});

export const rateColor = (id, rating) => ({
    type: C.RATE_COLOR,
    id,
    rating
});

export const removeColor = (id) => ({
    type: C.REMOVE_COLOR,
    id
});