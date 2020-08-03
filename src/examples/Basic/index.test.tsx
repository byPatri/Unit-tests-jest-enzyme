import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import BasicExample from './index';

describe('examples/Basic', () => {
    it('should not throw on mount', () => {
        expect(() => mount(<BasicExample />)).not.toThrow();
    });

    it('should render correctly', () => {
        const wrapper = mount(<BasicExample />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should has proper text inside', () => {
        const wrapper = mount(<BasicExample />);
        const div = wrapper.find('div').at(0);

        expect(div.text()).toEqual('Basic React Component');
    });

    it('should has passed in props className', () => {
        const wrapper = mount(<BasicExample className='test-classname' />);
        const div = wrapper.find('div').at(0);

        expect(div.hasClass('test-classname')).toBe(true);
    });
});
