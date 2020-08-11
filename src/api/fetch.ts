import axios from 'axios';

export type IFilm = {
    id: string;
    title: string;
}

export const getGhibliMovies = async() => axios.get('https://ghibliapi.herokuapp.com/films')
    .then(({ data }) => data.map((item: IFilm) => item.title))
    .catch((error) => {
        throw error;
    });
