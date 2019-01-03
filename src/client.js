import { ApolloClient, createNetworkInterface } from 'react-apollo';

const apolloClient = new ApolloClient({
  initialState: window.__APOLLO_STATE__,
  ssrForceFetchDelay: 100,
  networkInterface: createNetworkInterface({
    uri: 'https://m5j9784k8j.sse.codesandbox.io',
  }),
  queryDeduplication: true,
});

export default apolloClient;
