import React from 'react';

const Friend = (props) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h2>Email: {props.email}</h2>
        </div>
    );
};

export default Friend;
