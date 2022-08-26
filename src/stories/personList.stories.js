import React from "react";
import PersonList from "../components/personList";
import SamplePerson from "./samplePersonData";
import { MemoryRouter } from "react-router";
import AddToLikesIcon from "../components/cardIcons/addToLikes";
import Grid from "@material-ui/core/Grid";
import ContextProvider from "../contexts/context";

export default {
  title: "Home Page/PersonList",
  component: PersonList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <ContextProvider>{Story()}</ContextProvider>,
  ],
};

export const Basic = () => {
  const persons = [
    { ...SamplePerson, id: 1 },
    { ...SamplePerson, id: 2 },
    { ...SamplePerson, id: 3 },
    { ...SamplePerson, id: 4 },
    { ...SamplePerson, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <PersonList
        persons={persons}
        action={(person) => <AddToLikesIcon person={person} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
