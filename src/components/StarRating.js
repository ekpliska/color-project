import React from 'react';
import Star from './Star';

const StarRating = ({ starsSelected = 0, totalStars = 5, onRate = f => f }) => {
    return (
        <React.Fragment>
            <div className="star-rating">
                {[...Array(totalStars)].map((n, i) => {
                    return (
                        <Star key={i} selected={i < starsSelected} onClick={() => onRate(i + 1)} />
                    )
                })}
                <p>{starsSelected} of {totalStars}</p>
            </div>
        </React.Fragment>
    )
}

export default StarRating;