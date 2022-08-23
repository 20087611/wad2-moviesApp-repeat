import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterPersonsCard from "../filterPersonsCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PersonList from "../personList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function PersonListPageTemplate({ persons, title, action }) {
  const classes = useStyles();
  const [nameFilter, setNameFilter] = useState("");
  const [switchOn,setSwitchOn] = useState(true);

  let displayedPersons = switchOn ?
    persons
      .filter((a) => {
        return a.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
      }) :
    persons
      .filter((a) => {
        return a.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
      }).sort((a, b) => { return a.popularity - b.popularity });


  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setSwitchOn(!switchOn);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterPersonsCard
            onUserInput={handleChange}
            onSwitchChange={handleChange}
            titleFilter={nameFilter}
          />
        </Grid>
        <PersonList action={action} persons={displayedPersons}></PersonList>
      </Grid>
    </Grid>
  );
}
export default PersonListPageTemplate;