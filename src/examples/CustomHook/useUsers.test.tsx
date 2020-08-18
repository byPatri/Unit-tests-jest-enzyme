import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { USERS, useUsers } from './useUsers';

describe('examples/CustomHook/useUsers', () => {
    let TestComponent: React.FC;

    beforeEach(() => {
        // We need to create component which will be used to test hook
        // eslint-disable-next-line react/display-name
        TestComponent = () => {
            const hook = useUsers();

            // We pass hook as property to element so we can access it values
            return (<div data-hook={hook} />);
        };
    });

    it('should return userExists as false on component mount', () => {
        const wrapper = mount(<TestComponent />);

        const { userExists } = wrapper.find('div').prop('data-hook');

        expect(userExists).toBe(false);
    });

    it('should return userExists as true if searchUser is called with one of user name', () => {
        const wrapper = mount(<TestComponent />);

        const { searchUser } = wrapper.find('div').prop('data-hook');
        act(() => searchUser(USERS[0]));
        // This setProps updates mounted component, for shallow we can use wrapper.update()
        wrapper.setProps({});
        const { userExists } = wrapper.find('div').prop('data-hook');

        expect(userExists).toBe(true);
    });
});
