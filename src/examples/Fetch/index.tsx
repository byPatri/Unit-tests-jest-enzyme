import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Props = {
    className?: string
};

type IFilm = {
    id: string;
    title: string;
}

const FetchExample: React.FC<Props> = ({ className }) => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        axios.get('https://ghibliapi.herokuapp.com/films')
            .then(({ data }) => setFilms(data.map((item: IFilm) => item.title)))
            .catch((error) => console.log(error));
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
