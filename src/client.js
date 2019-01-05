import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const apolloClient = new ApolloClient({
  ssrForceFetchDelay: 100,
  link: new HttpLink({
    uri: 'https://m5j9784k8j.sse.codesandbox.io',
  }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

export default apolloClient;
