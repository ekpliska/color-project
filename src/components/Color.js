import React from 'react';
import PropTypes from 'prop-types';

class Color extends React.Component {
    render() {
        console.log('------', this.props);
        
        const { title, color } = this.props
        return (
            <section className="color" style={this.style}>
                <h1 ref="title">{title}: {color}</h1>
                {/* <button onClick={onRemove}>
                    <FaTrash />
                </button> */}
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
}

export default Color;