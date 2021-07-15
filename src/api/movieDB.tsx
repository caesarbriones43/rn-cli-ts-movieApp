import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'b43f64a7570174ede714b0442ae04f67',
    language: 'es-ES',
  },
});

export default movieDB;
