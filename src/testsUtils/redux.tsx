import React from 'react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreCreator } from 'redux-mock-store';

export const mockStore: MockStoreCreator<any> = configureStore<any>();

export const mockProvider = (store: any): React.FC => ({ children }) => (
    <Provider store={store}>
        {children}
    </Provider>
);
