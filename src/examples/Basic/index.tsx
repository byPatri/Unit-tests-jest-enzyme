import React from 'react';

type Props = {
    className?: string
};

const BasicExample: React.FC<Props> = ({ className }) => (
    <div className={className}>Basic React Component</div>
);

export default BasicExample;
