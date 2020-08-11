import axios from 'axios';

import { getGhibliMovies } from './fetch';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetch Data from API', () => {

    it('fetches successfully data from an API', async () => {
        const fetchedData = {
            data: [{
                title: 'Castle in the Sky'
            }]
        };
        mockedAxios.get.mockImplementationOnce(() => Promise.resolve(fetchedData));
        const result = await getGhibliMovies();
        expect(result).toEqual(['Castle in the Sky']);
    });

    it('fetches erroneously data from an API', async () => {
        const errorMessage = 'Fetch Error';

        mockedAxios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
        await expect(getGhibliMovies()).rejects.toThrow(errorMessage);
    });
});
