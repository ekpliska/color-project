import React from 'react';
import StarRating from './StarRating/StarRating';
import PropTypes from 'prop-types';

export class Color extends React.Component {
    componentWillMount() {
        this.style = { backgroundColor: '#ccc' };
    }

    componentWillUpdate() {
        this.style = null;
    }

    shouldComponentUpdate(nextProps) {
        const { rating } = this.props;
        return rating !== nextProps.rating;
    }

    componentDidUpdate(prevProps) {
        const { title, rating } = this.props;
        const status = (rating > prevProps.rating) ? 'better' : 'worse';
        console.log(`${title} is getting ${status}`);
    }

    render() {
        const { title, color, rating, onRate, onRemove } = this.props;
        return (
            <section className="color" style={this.style}>
                <h1>{title}</h1>
                <div className="color" style={{ backgroundColor: color }}>pallete</div>
                <div>
                    <StarRating starsSelected={rating} onRate={onRate} />
                </div>
                <button onClick={onRemove}>remove</button>
            </section>    
        )
    }
}

Color.propTypes = {
    title: PropTypes.string,
    rating: PropTypes.number,
    color: PropTypes.string,
    onRate: PropTypes.func,
    onRemove: PropTypes.func
}

Color.defaultProps = {
    title: undefined,
    rating: 0,
    color: '#000000',
    onRate: f => f
}

// const Color = ({ title, color, rating = 0, onRemove = f => f, onRate = f => f }) => {
//     return (
//         <section className="color">
//             <h1>{title}</h1>
//             <div className="color" style={{ backgroundColor: color }}>pallete</div>
//             <div>
//                 <StarRating starsSelected={rating} onRate={onRate} />
//             </div>
//             <button onClick={onRemove}>remove</button>
//         </section>
//     )
// }

// export default Color;