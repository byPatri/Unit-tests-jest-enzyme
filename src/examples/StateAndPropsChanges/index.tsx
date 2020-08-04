import React, { useEffect, useState } from 'react';
import DumbComponent from '../../components/DumbComponent';

type Props = {
    propsValue?: string
}

const StateAndPropsChangesExample: React.FC<Props> = ({ propsValue }) => {
    const [value, setValue] = useState<string>('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    useEffect(() => {
        setValue(propsValue || '');
    }, [propsValue]);

    return (
        <div>
            <input
                type='text'
                value={value}
                onChange={onChange} />
            <DumbComponent onChange={onChange} />
            <div className='input-value'>
                Input value: {value}
            </div>
        </div>
    );
};

export default StateAndPropsChangesExample;
