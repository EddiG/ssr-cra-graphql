import { ApolloClient, createNetworkInterface } from 'react-apollo';

const apolloClient = new ApolloClient({
  initialState: window.__APOLLO_STATE__,
  ssrForceFetchDelay: 100,
  networkInterface: createNetworkInterface({
    uri: 'https://31zrkwkkv.lp.gql.zone/graphql',
    opts: {
      credentials: 'include',
    },
  }),
  queryDeduplication: true,
});

export default apolloClient;
