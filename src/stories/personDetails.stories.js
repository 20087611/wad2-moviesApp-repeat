import React from "react";
import PersonDetails from "../components/personDetails";
import SamplePerson from "./samplePersonData";
import { MemoryRouter } from "react-router";
import ContextProvider from "../contexts/Context";

export default {
  title: "Person Details Page/PersonDetails",
  component: PersonDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <ContextProvider>{Story()}</ContextProvider>,
  ],
};

export const Basic = () => <PersonDetails person={SamplePerson} />;

Basic.storyName = "Default";