import React, { useState } from "react";

export const Context = React.createContext(null);

const ContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} );
  const [favorites, setFavorites] = useState( [] );
  const [playlist, setPlaylist] = useState( [] );
  const [likes, setLikes] = useState( [] );


  // add movies to favorite list
  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    } else{
      newFavorites = favorites;
    }
    setFavorites(newFavorites)
  };
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };


  // add reviews to movie
  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };


  // add upcoming movies to playlist
  const addToPlaylist = (movie) => {
    let newPlaylist = [];
    if (!playlist.includes(movie.id)) {
      newPlaylist = [...playlist, movie.id];
    } else {
      newPlaylist = playlist;
    }
    setPlaylist(newPlaylist);
  };
  const removeFromPlaylist = (movie) => {
    setPlaylist( playlist.filter(
      (mId) => mId !== movie.id
    ) )
  };


  //Add a person you like into the Likes list
  const addToLikes = (person) => {
    let newLikes = [];
    if (!likes.includes(person.id)) {
      newLikes = [...likes, person.id];
    } else{
      newLikes = likes;
    }
    setLikes(newLikes)
  };
  //Remove a person from the Likes list
  const removeFromLikes = (person) => {
    setLikes( likes.filter(
      (aId) => aId !== person.id
    ) )
  };


  return (
    <Context.Provider
      value={{
        favorites,
        playlist,
        likes,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToPlaylist,
        removeFromPlaylist,
        addToLikes,
        removeFromLikes
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;