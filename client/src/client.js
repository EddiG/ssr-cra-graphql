import { ApolloClient, createNetworkInterface } from 'react-apollo';

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://31zrkwkkv.lp.gql.zone/graphql',
    opts: {
      credentials: 'include',
    },
  }),
  queryDeduplication: true,
});

export default apolloClient;
