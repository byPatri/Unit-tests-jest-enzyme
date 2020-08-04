import React from 'react';
import { mount } from 'enzyme';
import { MockStore } from 'redux-mock-store';
import { mockProvider, mockStore } from '../../testsUtils/redux';
import StoreExample from './index';
import { isDialogOpenSelector } from '../../store/dialog/selectors';
import { toMock } from '../../testsUtils/toMock';
import { TOGGLE_DIALOG } from '../../store/dialog/constants';

jest.mock('../../store/dialog/selectors', () => ({
    isDialogOpenSelector: jest.fn()
}));

describe('examples/Store', () => {
    let store: MockStore;
    let Provider: React.FC;

    beforeEach(() => {
        store = mockStore({});

        const ReduxProvider = mockProvider(store);
        // eslint-disable-next-line react/display-name
        Provider = ({ children }) => (
            <ReduxProvider>
                {children}
            </ReduxProvider>
        );
    });

    it('should not show dialog if redux state of isDialogOpen is set to false', () => {
        toMock(isDialogOpenSelector).mockReturnValue(false);

        const wrapper = mount(<Provider><StoreExample /></Provider>);

        expect(wrapper.find('.store-example__dialog').exists()).toBe(false);
    });

    it('should show dialog if redux state of isDialogOpen is set to true', () => {
        toMock(isDialogOpenSelector).mockReturnValue(true);

        const wrapper = mount(<Provider><StoreExample /></Provider>);

        expect(wrapper.find('.store-example__dialog').exists()).toBe(true);
    });

    it('should dispatch toggleDialog action on button click', () => {
        const wrapper = mount(<Provider><StoreExample /></Provider>);

        wrapper.find('.store-example__button').simulate('click');

        expect(store.getActions()).toEqual([{ type: TOGGLE_DIALOG }]);
    });
});
