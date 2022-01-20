import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesFromAPI } from '../api';
import { T_InitialState } from '../modules/indexRedux';
import '../modules/movieList';
import { IMovieList, setData } from '../modules/movieList';
export default function MovieContainer() {
  const { movieList } = useSelector((state: T_InitialState) => state);
  const dispatch = useDispatch();

  async function getMovieData() {
    const state: IMovieList = await getMoviesFromAPI();
    dispatch(setData(state));
  }
  useEffect(() => {
    getMovieData();
  }, []);

  console.log(movieList);
  return (
    <div>
      Movie Container
      {movieList.results.map((movie, idx) => (
        <div key={idx}>{movie.title}</div>
      ))}
    </div>
  );
}
