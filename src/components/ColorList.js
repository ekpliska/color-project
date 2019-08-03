import React from 'react';
import Color from './Color';
import PropTypes from 'prop-types'

const ColorList = ({ colors, onRemove = f => f }) => {
    // debugger;
    return (
        <div>
            {
                (colors.length === 0)
                    ? <p>No colors</p>
                    : colors.map((color, index) => {
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