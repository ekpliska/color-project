import React from 'react';
import Color from './Color';
import PropTypes from 'prop-types'

const ColorList = ({ colors, onRemove = f => f, onRate = f => f }) => {
    return (
        <div className="colors-lists">
            {
                (colors.length === 0)
                    ? <p>No colors</p>
                    : colors.map((color, i) => {
                        return (
                            <Color
                                key={color.id}
                                {...color}
                                onRemove={() => onRemove(color.id)}
                                onRate={(rating) => onRate(color.id, rating)}
                            />
                        )
                    })
            }
        </div>
    )
}

ColorList.propTypes = {
    colors: PropTypes.array,
    onRemove: PropTypes.func,
    onRate: PropTypes.func,
}

export default ColorList;