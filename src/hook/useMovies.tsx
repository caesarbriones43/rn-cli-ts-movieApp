import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBResponse} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [latestMovie, setLatestMovie] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const getMovies = () => {
    movieDB.get<MovieDBResponse>('/now_playing').then(resp => {
      setLatestMovie(resp.data.results);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    latestMovie,
    isLoading,
  };
};
