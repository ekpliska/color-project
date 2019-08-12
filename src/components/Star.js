import React from 'react';

const Star = ({ selected, onClick = f => f }) => {
    return (
        <div className={(selected) ? "star selected" : "star"} onClick={onClick}></div>
    )
}

export default Star;