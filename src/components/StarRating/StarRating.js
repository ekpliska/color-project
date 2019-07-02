import React from 'react';
import Star from './Star';

const StarRating = ({ starsSelected = 0, totalStar = 5, onRate = f => f }) => {
    return (
        <div className="star-rating">
            {
                [...Array(totalStar)].map((n, i) =>
                    <Star key={i}
                        selected={i < starsSelected}
                        onClick={() => onRate(i + 1)}
                    />
                )}
            <br />
            <p>
                {starsSelected} из {totalStar} звезд
            </p>
        </div>

    )
}

export default StarRating;