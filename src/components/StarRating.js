import React from 'react';
import Star from './Star';

const StarRating = ({ starsSelected = 0, totalStars = 5 }) => {
    return (
        <React.Fragment>
            <div className="star-rating">
                {[...Array(totalStars)].map((n, i) => {
                    return (
                        <Star key={i} selected={i < starsSelected} />
                    )
                })}
            </div>
            <p>{starsSelected} of {totalStars}</p>
        </React.Fragment>
    )
}

export default StarRating;