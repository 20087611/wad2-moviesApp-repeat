import React, { useContext } from "react";
import PageTemplate from "../components/templatePersonListPage";
import { DataContext } from "../contexts/dataContext";
import { useQueries } from "react-query";
import { getPerson } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromLikes from "../components/cardIcons/removeFromLikes";


const LikesPersonsPage = () => {
  const {likes: personIds } = useContext(DataContext);

  // Create an array of queries and run in parallel.
  const likesPersonQueries = useQueries(
    personIds.map((personId) => {
      return {
        queryKey: ["person", { id: personId }],
        queryFn: getPerson,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = likesPersonQueries.find((a) => a.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const persons = likesPersonQueries.map((q) => {
    // q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });
  // const toDo = () => true;

  return (
    <PageTemplate
      title="Liked Persons"
      persons={persons}
      action={(person) => {
        return (
          <>
            <RemoveFromLikes person={person} />
          </>
        );
      }}
    />
  );
};

export default LikesPersonsPage;