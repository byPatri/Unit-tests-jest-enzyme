import React from 'react';

type Props = {
    className?: string
};

const Basic: React.FC<Props> = ({ className }) => (
    <div className={className}>Basic React Component</div>
);

export default Basic;
