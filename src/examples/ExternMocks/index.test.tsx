import React from 'react';
import { mount } from 'enzyme';
import ExternMocksExample from './index';
import DumbComponent, { DumbComponentType } from '../../components/DumbComponent';
import { externFunction } from './externFunction';
import { toMock } from '../../testsUtils/toMock';

jest.mock('../../components/DumbComponent', () => {
    // In jest we need to declare variables inside of mock if we want to use it in it
    const mockComponent: DumbComponentType = ({ children }) => children;

    return ({
        // https://github.com/facebook/jest/issues/5579
        __esModule: true,
        default: mockComponent
    });
});

jest.mock('./externFunction');

describe('examples/ExternMocks', () => {
    it('should render text inside DumbComponent', () => {
        const wrapper = mount(<ExternMocksExample />);

        expect(wrapper.find(DumbComponent).text()).toEqual('Dumb Component Content');
    });

    it('should render what externFunction returns inside div', () => {
        const mockedValue = 'Extern Function Value Mocked';
        // toMock helps in typing mocked functions
        toMock(externFunction).mockReturnValue(mockedValue);
        const wrapper = mount(<ExternMocksExample />);

        expect(wrapper.find('.extern-function-value').text()).toEqual(mockedValue);
    });
});
