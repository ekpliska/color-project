import React from 'react';
import { Color } from './Color';

const ColorList = ({ colors, onRate, onRemove }) => {
    return (
        <div className="color-list">
            {
                colors.length === 0
                    ? <p>No colors, add color...</p>
                    : colors.map((color, index) => {
                        return (
                            <Color key={color.id}
                                {...color}
                                onRate={onRate}
                                onRemove={onRemove}
                            />
                        )
                    })
            }
        </div>
    )
}

export default ColorList;