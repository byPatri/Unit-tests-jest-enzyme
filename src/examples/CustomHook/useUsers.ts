import { useEffect, useState } from 'react';

export const USERS = [
    'John',
    'Jim',
    'Jack'
];

export const useUsers = () => {
    const [value, setValue] = useState<string>('');
    const [userExists, setUserExists] = useState<boolean>(false);

    useEffect(() => {
        if (USERS.includes(value) && !userExists) {
            setUserExists(true);
        } else if (!USERS.includes(value) && userExists) {
            setUserExists(false);
        }
    }, [value, userExists]);

    return {
        searchUser: setValue,
        userExists
    };
};
