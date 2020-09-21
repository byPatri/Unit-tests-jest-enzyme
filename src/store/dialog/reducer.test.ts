import { dialogReducer } from './reducer';
import { DialogState } from './types';
import { TOGGLE_DIALOG } from './constants';

describe('store/dialog/reducer', () => {
    let state: DialogState;
    let action: any;

    beforeEach(() => {
        state = {
            isOpen: false
        };
        action = {
            type: 'DEFAULT'
        };
    });

    it('should return default state if passed action is not handled in this reducer', () => {
        const result = dialogReducer(state, action);

        expect(result).toEqual(state);
    });

    it('should return state with isOpen true after TOGGLE_DIALOG action', () => {
        action = { type: TOGGLE_DIALOG };

        const result = dialogReducer(state, action);

        expect(result).toEqual({ isOpen: true });
    });
});
