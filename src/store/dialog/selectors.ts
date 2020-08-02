import { createSelector } from 'reselect';
import { AppState } from '../store';
import { DialogState } from './types';

const dialogSelector = (state: AppState): DialogState => state.dialog;

export const isDialogOpenSelector = createSelector<AppState, DialogState, boolean>(
    dialogSelector,
    ({ isOpen }) => isOpen
);
