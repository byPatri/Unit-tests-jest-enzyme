import { DialogState, DialogToggleAction } from './types';
import { TOGGLE_DIALOG } from './constants';

const initialState: DialogState = {
    isOpen: false
};

export function dialogReducer(
    state: DialogState = initialState,
    action: DialogToggleAction
): DialogState {
    switch (action.type) {
    case TOGGLE_DIALOG:
        return {
            ...state,
            isOpen: !state.isOpen
        };
    default:
        return state;
    }
}
