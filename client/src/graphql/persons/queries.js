import gql from 'graphql-tag';

export const PERSON = gql`
  query PERSON($id: ID!) {
    person(id: $id) {
      name
    }
  }
`;
