import React from 'react';
import getFakeMembers from '../../Promises/getFakeMembers';

const Member = ({ email, picture, name, location }) => {
    return (
        <div className="member">
            <img src={picture.thumbnail} alt="" />
            <h1>{name.first} {name.last}</h1>
            <p>
                <a href={"mailto" + email}>{email}</a>
            </p>
            <p>
                {location.city}, {location.state}
            </p>
        </div>
    )
}

class MemberList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [],
            loading: false,
            error: null
        }
    }

    componentWillMount() {
        this.setState({
            loading: true
        });
        getFakeMembers(this.props.count).then(
            members => {
                this.setState({
                    members: members,
                    loading: false
                })
            },
            error => {
                this.setState({
                    error, loading: false
                })
            }
        )
    }

    componentWillUpdate() {
        console.log('update lifecycle');
        
    }

    render() {
        
        const { members, loading, error } = this.state;
        // debugger;
        return (
            <div className="member-list">
                {
                    (loading) ?
                        <span>Loading members</span> :
                        (members.length) ?
                            members.map((user, index) => {
                                return (
                                    <Member key={index} {...user} />
                                )
                            }) : <span>0 members loaded</span>
                }
                {
                    (error) ?
                        <p>Error loading members</p> :
                        ''
                }
            </div>
        )
    }

}

export default MemberList;