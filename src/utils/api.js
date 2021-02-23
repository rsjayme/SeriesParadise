import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export default api;

// https://api.themoviedb.org/3/tv/1396?api_key=584e780a9b10a215078a37a17908bcce&language=en-US Especific serie info
//https://api.themoviedb.org/3/tv/popular?api_key=584e780a9b10a215078a37a17908bcce&language=en-US&page=1 for main page
