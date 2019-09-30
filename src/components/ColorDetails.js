import React from 'react';
import { withRouter } from 'react-router-dom';

const ColorDetails = ({ title, color, history }) => {
    debugger;
    return (
        <div className="color-details" style={{ backgroundColor: color }} onClick={() => history.goBack()}>
            <h1>{title}</h1>
            <h1>{color}</h1>
        </div>
    )
}

export default withRouter(ColorDetails);