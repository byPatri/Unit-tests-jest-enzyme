import { TOGGLE_DIALOG } from './constants';
import { DialogToggleAction } from './types';

export const toggleDialoge = (): DialogToggleAction => ({
    type: TOGGLE_DIALOG
});
