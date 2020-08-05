import React from 'react';

const Users = (props) => {
    return (
        <div>
            <p>Name: {props.name} </p>
            <p>Gen: {props.gen} </p>
            <p>Email: {props.email} </p>
            <hr/>
        </div>
    );
}

export default Users;
