import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { USERS, useUsers } from './useUsers';

describe('examples/CustomHook/useUsers', () => {
    let TestComponent: React.FC;

    beforeEach(() => {
        // eslint-disable-next-line react/display-name
        TestComponent = () => {
            const hook = useUsers();

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
        wrapper.setProps({});
        const { userExists } = wrapper.find('div').prop('data-hook');

        expect(userExists).toBe(true);
    });
});
