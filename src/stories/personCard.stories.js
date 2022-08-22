import React from "react";
import PersonCard from "../components/personCard";
import SamplePerson from "./samplePersonData"; //Sample data about a person
import { MemoryRouter } from "react-router";
import PersonsContextProvider from "../contexts/personsContext";
import AddToLikesIcon from "../components/cardIcons/addToLikes";

export default {
  title: "Home Page/PersonCard",
  component: PersonCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <PersonsContextProvider>{Story()}</PersonsContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <PersonCard
      person={SamplePerson}
      action={(person) => <AddToLikesIcon person={person} />}
      taging={(person) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SamplePerson, profile_path: undefined };
  return (
    <PersonCard
      person={sampleNoPoster}
      action={(person) => <AddToLikesIcon person={person} />}
      taging={(person) => null}
    />
  );
};
Exceptional.storyName = "exception";
