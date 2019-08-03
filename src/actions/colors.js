import C from '../constants';

export const removeColor = (id) =>
    ({
        type: C.REMOVE_COLOR,
        id: id,
    })

export const addColor = (title, color) =>
    ({
        type: C.ADD_COLOR,
        id: 464,
        title,
        color,
        timestamp: new Date().toString()
    })
