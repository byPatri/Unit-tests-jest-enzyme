import { combineReducers } from 'redux';
import { dialogReducer } from './dialog/reducer';

export const rootReducer = combineReducers({
    dialog: dialogReducer
});
