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

export const sortColor = (sortedBy) => {
    return (
    (sortedBy === 'rating') ?
        ({
            type: C.SORT_COLORS,
            sortBy: 'SORTED_BY_RATING'
        }) : 
        (sortedBy === 'title') ?
            ({
                type: C.SORT_COLORS,
                sortBy: 'SORT_BY_TITLE'
            }) : 
            ({
                type: C.SORT_COLORS,
                sortBy: 'SORT_BY_DATE'
                })
    )
}