import { isDialogOpenSelector } from './selectors';
import { AppState } from '../store';

describe('store/dialog/selectors', () => {
    let state: AppState;

    beforeEach(() => {
        state = {
            dialog: {
                isOpen: true
            }
        };
    });

    describe('isDialogOpenSelector', () => {
        it('should return true if isOpen is true', () => {
            const result = isDialogOpenSelector(state);

            expect(result).toBe(true);
        });
    });
});
