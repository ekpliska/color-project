import React from 'react';
import { Color } from './Color';
import { rateColor, removeColor } from '../actions/index';

const ColorList = ({ store }) => {
    const { colors, sort } = store.getState();
    return (
        <div className="color-list">
            {
                (colors.length === 0) ? 
                    <p>No colors, add color</p> :
                    colors.map((color, index) => {
                        return (
                            <Color
                                key={color.id}
                                {...color}
                                onRate={(rating) => 
                                    store.dispatch(
                                        rateColor(color.id, rating)
                                    )
                                }
                                onRemove={() =>
                                    store.dispatch(
                                        removeColor(color.id)
                                    )
                                }
                            />
                            // <Color
                            //     key={color.id}
                            //     {...color}
                            //     onRate={(rating) => onRate(color.id, rating)}
                            //     onRemove={() => onRemove(color.id)}
                            // />
                        )
                    })
            }
        </div>
    )
}

export default ColorList;