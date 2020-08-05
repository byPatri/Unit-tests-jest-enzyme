import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import FetchExample from './index';

describe('examples/Fetch', () => {
    it('should not throw on mount', () => {
        expect(() => mount(<FetchExample />)).not.toThrow();
    });
});
