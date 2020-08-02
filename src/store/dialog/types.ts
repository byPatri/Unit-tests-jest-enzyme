import { TOGGLE_DIALOG } from './constants';

export type DialogState = {
    isOpen: boolean;
};

export interface IToggleDialog {
    type: typeof TOGGLE_DIALOG;
}

export type DialogToggleAction =
    | IToggleDialog;
