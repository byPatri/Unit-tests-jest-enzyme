import { TOGGLE_DIALOG } from './constants';
import { DialogToggleAction } from './types';

export const toggleDialog = (): DialogToggleAction => ({
    type: TOGGLE_DIALOG
});
