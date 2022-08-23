import React from "react";
import PageTemplate from "../components/templatePersonListPage";
import AddToLikesIcon from '../components/cardIcons/addToLikes'
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getPersons} from '../api/tmdb-api'

const PersonsPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('persons', getPersons)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const persons = data.results;

  return (
    <PageTemplate
      title="Discover Persons"
      persons={persons}
      action={(person) => {
        return <AddToLikesIcon person={person} />
      }}
    />
  );
};

export default PersonsPage;