import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AppState } from '../store/store';
import { DialogToggleAction } from '../store/dialog/types';

export const mockStore = configureStore<Partial<AppState>, DialogToggleAction>();

export const mockProvider = (store: any): React.FC => ({ children }) => (
    <Provider store={store}>
        {children}
    </Provider>
);
