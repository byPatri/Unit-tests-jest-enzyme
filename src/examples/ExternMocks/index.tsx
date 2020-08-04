import React from 'react';
import DumbComponent from '../../components/DumbComponent';
import { externFunction } from './externFunction';

const ExternMocksExample = () => (
    <div>
        <DumbComponent>
            Dumb Component Content
        </DumbComponent>
        <div className='extern-function-value'>
            {externFunction()}
        </div>
    </div>
);

export default ExternMocksExample;
