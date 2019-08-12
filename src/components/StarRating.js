import React from 'react';
import Star from './Star';

class StarRating extends React.Component { 
    render() {
        const { totalStar } = this.props;
        const { starsSelected } = this.props;
        return (
            <Star />
        )
    }
}

export default StarRating;