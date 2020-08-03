import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../store/store';

type StoreProviderProps = {
    children: React.ReactChild | React.ReactChild[];
}

export const StoreProvider: React.FC<StoreProviderProps> = (
    props: StoreProviderProps
) => (
    <Provider store={store}>
        {props.children}
    </Provider>
);
