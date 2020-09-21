import { toggleDialog } from './actions';
import { TOGGLE_DIALOG } from './constants';

describe('store/dialog/actions', () => {
    describe('toggleDialog', () => {
        it('should return object with type TOGGLE_DIALOG', () => {
            const result = toggleDialog();

            expect(result).toEqual({ type: TOGGLE_DIALOG });
        });
    });
});
