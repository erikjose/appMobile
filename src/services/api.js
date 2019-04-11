import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nodestack-backend.herokuapp.com',
});

export default api;