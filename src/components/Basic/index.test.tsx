import React from 'react';
import { mount } from 'enzyme';
import Basic from './index';

describe('components/Basic/index', () => {
    it('should not throw on mount', () => {
        expect(() => mount(<Basic />)).not.toThrow();
    });
});
