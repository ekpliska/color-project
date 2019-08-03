import React from 'react';
import PropTypes from 'prop-types';

class Color extends React.Component {
    render() {
        console.log('------', typeof(this.props.onRemove));
        
        const { title, color, onRemove } = this.props
        return (
            <section className="color" style={this.style}>
                <h1 ref="title">{title}: {color}</h1>
                <button onClick={onRemove}>Удалить</button>
                <div className="color"
                    style={{ backgroundColor: color }}>
                </div>
                {/* <div>
                    <StarRating starsSelected={rating} onRate={onRate} />
                </div> */}
            </section>
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

export default Color;