import React, { Component } from 'react';
import Friend from './Friend';

class FriendList extends Component {
    constructor() {
        super();
        this.state = {
            friends: [
                { name: 'Hatsim', email: 'blah@abc.com' },
                { name: 'Mozi', email: 'nothing@xyz.com' }
            ]
        };
    }

    changeBookState = () => {
        this.setState({
            friends: [{ name: 'Hatsim Updated', email: 'updated@abc.com' }]
        });
    };

    render() {
        return (
            <div>
                <Friend name={this.state.friends[0].name} email={this.state.friends[0].email} />
                <button onClick={this.changeBookState}>Click Me</button>
            </div>
        );
    }
}

export default FriendList;
