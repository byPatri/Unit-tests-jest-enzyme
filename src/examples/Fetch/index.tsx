import React, { useEffect, useState } from 'react';
import { getGhibliMovies } from '../../api/fetch';

type Props = {
    className?: string
};

const FetchExample: React.FC<Props> = ({ className }) => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getGhibliMovies();
            setFilms(result);
        };
        fetchData();
    }, []);

    return (
        <div className={className}>
            <h1>Ghibli studio movies:</h1>
            {films && films.map((film) =>
                <li key={film}>{film}</li>)
            }
        </div>
    );
};

export default FetchExample;
