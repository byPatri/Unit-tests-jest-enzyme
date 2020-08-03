import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isDialogOpenSelector } from '../../store/dialog/selectors';
import { AppState } from '../../store/store';
import { toggleDialog } from '../../store/dialog/actions';
import './index.scss';

const StoreExample = () => {
    const dispatch = useDispatch();
    const isDialogOpen = useSelector<AppState, boolean>(isDialogOpenSelector);

    const onClick = () => dispatch(toggleDialog());

    return (
        <div>
            <div
                onClick={onClick}
                className='store-example__button'>
                Toggle dialog
            </div>
            { isDialogOpen && <div className='store-example__dialog'>Dialog</div> }
        </div>
    );
};

export default StoreExample;
