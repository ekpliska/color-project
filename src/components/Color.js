import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';
import { withRouter } from 'react-router-dom';

class Color extends React.Component {
    render() {
        const { id, title, color, rating, onRemove, onRate, history } = this.props;
        return (
            <div className="color-item" style={this.style}>
                <h2 ref="title" onClick={() => history.push(`/colorapp/${id}`)}>
                    {title}
                </h2>
                <button onClick={onRemove}>x</button>
                <div className="color-item__line"
                    onClick={() => history.push(`/colorapp/${id}`)}
                    style={{ backgroundColor: color }}></div>
                {/* <div className="color-item__line"
                    style={{ backgroundColor: color }}>
                </div> */}
                <div className="color-item__star">
                    <StarRating starsSelected={rating} onRate={onRate} />
                </div>
            </div>
        )
    }
}

Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
}

Color.defaultProps = {
    rating: 0,
    onRemove: f => f,
    onRate: f => f
}

export default withRouter(Color);