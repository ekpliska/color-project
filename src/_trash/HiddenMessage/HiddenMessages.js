import React from 'react';
import HiddenMessage from './HiddenMessage';

class HiddenMessages extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            messages: [
                'The crow crows after midnight',
                'Bring a watch and dark clothes to the sport',
                'Jericho Jericho Go'
            ],
            showing: 1
        }
    }

    componentWillMount() {
        this.interval = setInterval(() => {
            let { showing, messages } = this.state;
            showing = (++showing >= messages.length) ?
                -1 :
                showing;
            this.setState({
                showing
            })
        })
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { messages, showing } = this.state;
        return (
            <div className="hidden-messages">
                {
                    messages.map((message, i) => {
                        return (
                            <HiddenMessage key={i}
                                hide={(i !== showing)}
                            >
                                {message}
                            </HiddenMessage>
                        )
                    })
                }
            </div>
        )
    }

}

export default HiddenMessages;