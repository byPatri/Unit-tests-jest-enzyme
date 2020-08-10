import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import CustomHookExample from './index';
import { useUsers } from './useUsers';
import { toMock } from '../../testsUtils/toMock';

jest.mock('./useUsers', () => ({
    useUsers: jest.fn(),
    USERS: []
}));

describe('examples/CustomHook', () => {
    let searchUser: jest.Mock;
    let userExists;

    beforeEach(() => {
        userExists = false;
        searchUser = jest.fn();
        toMock(useUsers).mockReturnValue({ searchUser, userExists });
    });

    it('should call hook searchUser on input onChange', () => {
        const event = { target: { value: 'Jim' } };
        const wrapper = mount(<CustomHookExample />);

        const onChange = wrapper.find('input').prop('onChange');
        act(() => onChange && onChange(event as any));

        expect(searchUser).toBeCalledWith('Jim');
    });

    it('should show proper message if userExists returns false', () => {
        const wrapper = mount(<CustomHookExample />);

        expect(wrapper.find('.users-result').text()).toEqual('Does user exists? No');
    });

    it('should show proper message if userExists returns true', () => {
        userExists = true;
        toMock(useUsers).mockReturnValue({ userExists, searchUser });
        const wrapper = mount(<CustomHookExample />);

        expect(wrapper.find('.users-result').text()).toEqual('Does user exists? Yes');
    });
});
