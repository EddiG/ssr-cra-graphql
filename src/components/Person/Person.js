import React from "react";
import { usePerson } from "data/gql/persons";

const Person = ({ id }) => {
  const { loading, person } = usePerson(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>Name: {person.name}</div>;
};

export default Person;
