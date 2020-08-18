import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import StateAndPropsChangesExample from './index';
import DumbComponent from '../../components/DumbComponent';

jest.mock('../../components/DumbComponent', () => ({
    __esModule: true,
    default: () => null
}));

describe('examples/StateAndPropsChanges', () => {
    it('should change div value on input onChange action', () => {
        const event = { target: { value: 'ab' } };
        const wrapper = mount(<StateAndPropsChangesExample />);

        wrapper.find('input').simulate('change', event);

        expect(wrapper.find('.input-value').text()).toEqual('Input value: ab');
    });

    it('should change div value on propsValue change', () => {
        const propsValue = 'abc';
        const wrapper = mount(<StateAndPropsChangesExample />);

        wrapper.setProps({ propsValue });

        expect(wrapper.find('.input-value').text()).toEqual('Input value: abc');
    });

    it('should change div value on onChange action of extern component', () => {
        const event = { target: { value: 'abcd' } };
        const wrapper = mount(<StateAndPropsChangesExample />);

        const onChange = wrapper.find(DumbComponent).prop('onChange');
        // If we want to call component event we need to wrap it in act from react-dom/test-utils
        act(() => onChange(event));

        expect(wrapper.find('.input-value').text()).toEqual('Input value: abcd');
    });
});
