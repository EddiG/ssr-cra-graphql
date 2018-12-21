import 'isomorphic-fetch';
import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import Helmet from 'react-helmet';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from 'apollo-client';
import {
  ApolloProvider,
  getDataFromTree,
} from 'react-apollo';
import Html from './Html';
import App from './src/App';
import assets from './assets';

const app = express();

app.use(express.static(path.resolve(__dirname, '../build'), { index: false }));

app.use((req, res) => {
  //Log requests to debug isomorhic fetch
  console.log(req.path);
  const client = new ApolloClient({
    ssrMode: true,
    // Remember that this is the interface the SSR server will use to connect to the
    // API server, so we need to ensure it isn't firewalled, etc
    link: createHttpLink({
      uri: 'https://fakerql.com/graphql',
      credentials: 'include',
      headers: {
        cookie: req.header('Cookie'),
      },
    }),
    cache: new InMemoryCache(),
  });

  const ReactApp = (
    <ApolloProvider client={client}>
      <Router location={req.url} context={{}}>
        <App />
      </Router>
    </ApolloProvider>
  );
  getDataFromTree(ReactApp).then(() => {
     const content = ReactDOMServer.renderToString(ReactApp);
     const intialState = client.extract();
     const helmet = Helmet.renderStatic();
     const html = ReactDOMServer.renderToStaticMarkup(
        <Html content={content} helmet={helmet} state={intialState} assets={assets} />,
      );
  //const html = '<html><h1>w00t</h1></html>';
  res.status(200);
  res.send(`<!doctype html>${html}`);
  res.end();
  })
});

const port = process.env.PORT || 8888;

app.listen(port, () => {
  console.log(`Server listening on ${port} port`);
});
