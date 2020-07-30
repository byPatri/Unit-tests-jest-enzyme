import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';
import './index.scss';

const Main = () => (
    <div className='main'>
        <div className='main__title'>
            Examples:
        </div>
        <div className='main__grid'>
            {
                ROUTES.map(({ name, label }) => (
                    <Link className='main__grid__item' key={name} to={`/${name}`}>
                        {label}
                    </Link>
                ))
            }
        </div>
    </div>
);

export default Main;
