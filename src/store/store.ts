import { createStore } from 'redux';
import { rootReducer } from './rootReducer';

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer
);
