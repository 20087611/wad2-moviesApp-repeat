import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import PlaylistAddIcon from '../components/cardIcons/addToPlaylist';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getPopularMovies } from "../api/tmdb-api";

const PopularMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('popular', getPopularMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  return (
    <PageTemplate
      title="Popular Movies"
      movies={movies}
      action={(movie) => {
        return <PlaylistAddIcon movie={movie} />
      }}
    />
  );
};

export default PopularMoviesPage;