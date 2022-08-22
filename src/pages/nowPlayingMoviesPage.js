import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import PlaylistAddIcon from '../components/cardIcons/addToPlaylist';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getNowPlayingMovies } from "../api/tmdb-api";

const NowPlayingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('nowPlaying', getNowPlayingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  return (
    <PageTemplate
      title="Now Playing Movies"
      movies={movies}
      action={(movie) => {
        return <PlaylistAddIcon movie={movie} />
      }}
    />
  );
};

export default NowPlayingMoviesPage;