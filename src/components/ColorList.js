import React from 'react';
import Color from './Color';
import PropTypes from 'prop-types'

const ColorList = ({ colors }) => {
    // debugger;
    return (
        <div>
            {
                (colors.length === 0)
                    ? <p>No colors</p>
                    : colors.map((color, index) => {
                        return (
                            <Color key={color.id} {...color} />
                        )
                    })
            }
        </div>
    )
}

// ColorList.propTypes = {
//     colors: PropTypes.array
// }

export default ColorList;