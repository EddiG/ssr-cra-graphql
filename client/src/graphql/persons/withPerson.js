import { graphql } from 'react-apollo';
import { PERSON } from './queries';

const withPerson = graphql(PERSON, {
  options: ({ id }) => ({
    variables: { id },
  }),
  props: ({ data }) => ({
    name: data && data.person && data.person.name,
    ...data,
  }),
});

export default withPerson;
