import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";


const MY_QUERY = (id) => gql`
  query {
    User(id:"${id}") {
      firstName
    }
  }
`;

const Person = ({ id }) => {
    return (<Query query={MY_QUERY(id)} errorPolicy="all">
        {({ error, data, loading }) => {
            if (loading) return <span>loading...</span>
            return (
                <div>
                    <h2>Good: {data.User.firstName}</h2>
                    <pre>Bad: {error}
                    </pre>
                </div>
            )
        }}
    </Query>);
};

export default Person;
