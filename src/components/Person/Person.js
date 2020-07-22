import React from "react";
import { usePerson } from "data/gql/persons";

const Person = ({ id }) => {
  const { loading, person } = usePerson(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!person) {
    return <div>Sorry, he wasn't found :(</div>;
  }

  return <div>Name: {person.name}</div>;
};

export default Person;
