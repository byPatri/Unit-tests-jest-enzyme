import React from 'react';
import { mount } from 'enzyme';
import FetchExample from './index';

describe('examples/Fetch', () => {
    it('should not throw on mount', () => {
        expect(() => mount(<FetchExample />)).not.toThrow();
    });
});
