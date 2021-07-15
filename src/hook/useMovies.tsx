import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBResponse} from '../interfaces/movieInterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  upcoming: Movie[];
  topRated: Movie[];
}

export const useMovies = () => {
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    upcoming: [],
    topRated: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const getMovies = async () => {
    const nowPlayingPromise = movieDB.get<MovieDBResponse>('/now_playing');
    const popularPromise = movieDB.get<MovieDBResponse>('/popular');
    const upcomingPromise = movieDB.get<MovieDBResponse>('/upcoming');
    const topRatedPromise = movieDB.get<MovieDBResponse>('/top_rated');

    const resps = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      upcomingPromise,
      topRatedPromise
    ]);

    setMoviesState({
      nowPlaying: resps[0].data.results,
      popular: resps[1].data.results,
      upcoming: resps[2].data.results,
      topRated: resps[3].data.results
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
