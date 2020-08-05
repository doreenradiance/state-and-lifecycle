import React from 'react';
import Users from './Users';

const AllUsers = (props) => {
    return (
        <div>
            {props.userInfo.map((user, index) => {
                return <Users name={user.name} gen={user.gen} email={user.email} key={index} />
            })}
        </div>
    );
}

export default AllUsers;
