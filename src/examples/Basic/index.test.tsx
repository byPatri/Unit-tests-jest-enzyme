import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Basic from './index';

describe('components/Basic/index', () => {
    it('should not throw on mount', () => {
        expect(() => mount(<Basic />)).not.toThrow();
    });

    it('should render correctly', () => {
        const wrapper = mount(<Basic />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should has proper text inside', () => {
        const wrapper = mount(<Basic />);
        const div = wrapper.find('div').at(0);

        expect(div.text()).toEqual('Basic React Component');
    });

    it('should has passed in props className', () => {
        const wrapper = mount(<Basic className='test-classname' />);
        const div = wrapper.find('div').at(0);

        expect(div.hasClass('test-classname')).toBe(true);
    });
});
