import React, { useState } from "react";

export const Context = React.createContext(null);

const ContextProvider = (props) => {
  const [likes, setLikes] = useState( [] )

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
        likes,
        addToLikes,
        removeFromLikes,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;