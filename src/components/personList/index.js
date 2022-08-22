import React from "react";
import Person from "../personCard";
import Grid from "@material-ui/core/Grid";

const PersonList = ( {persons, action }) => {
  let personCards = persons.map((a) => (
    <Grid key={a.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Person key={a.id} person={a} action={action} />
    </Grid>
  ));
  return personCards;
};

export default PersonList;