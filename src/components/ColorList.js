import React from 'react';
import Color from './Color';
import PropTypes from 'prop-types'

const ColorList = ({ colors, onRemove = f => f }) => {
    return (
        <div className="colors-lists">
            {
                (colors.length === 0)
                    ? <p>No colors</p>
                    : colors.map((color) => {
                        return (
                            <Color key={color.id} {...color} onRemove={() => onRemove(color.id)} />
                        )
                    })
            }
        </div>
    )
}

ColorList.propTypes = {
    colors: PropTypes.array,
    onRemove: PropTypes.func
}

export default ColorList;