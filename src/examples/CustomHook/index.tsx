import React from 'react';
import { USERS, useUsers } from './useUsers';
import './index.scss';

const CustomHookExample = () => {
    const { searchUser, userExists } = useUsers();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => searchUser(e.target.value);

    return (
        <div className='users'>
            <div className='users-list'>
                Users list:
                {USERS.map((user) => (
                    <p key={user}>{user}</p>
                ))}
            </div>
            <div className='users-search'>
                Check if user exists:
                <input type='text' onChange={onChange} />
            </div>
            <div className='users-result'>
                Does user exists? {userExists ? 'Yes' : 'No'}
            </div>
        </div>
    );
};

export default CustomHookExample;
