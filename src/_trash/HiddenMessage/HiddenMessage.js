import React from 'react';

class HiddenMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: (props.hide) ? props.hide : true
        }
    }

    render() {
        const { children } = this.props;
        const { hidden } = this.state;
        return (
            <p>
                {
                    (hidden) ?
                        children.replace(/[a-zA-Z0-9]/g, 'x') :
                        children
                }
            </p>
        )
    }
}

export default HiddenMessage;