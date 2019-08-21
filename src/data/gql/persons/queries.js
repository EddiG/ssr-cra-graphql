import gql from 'graphql-tag';

export const PERSON_QUERY = gql`
  query PERSON($id: ID!) {
    person(id: $id) {
      name
    }
  }
`;
