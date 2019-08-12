import React from 'react';

const Star = ({ selected }) => {
    return (
        <div className={(selected) ? "star selected" : "star"}></div>
    )
}

export default Star;