import React from 'react';
import { USERS, useUsers } from './useUsers';

const CustomHookExample = () => {
    const { searchUser, userExists } = useUsers();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => searchUser(e.target.value);

    return (
        <div>
            <div>
                Users list:
                {USERS.map((user) => (
                    <p key={user}>{user}</p>
                ))}
            </div>
            <div>
                Check if user exists:
                <input type='text' onChange={onChange} />
            </div>
            <div>
                Does user exists?
                {userExists ? 'Yes' : 'No'}
            </div>
        </div>
    );
};

export default CustomHookExample;
