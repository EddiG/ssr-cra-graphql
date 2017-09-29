import 'isomorphic-fetch';
import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import Helmet from 'react-helmet';
import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider,
  getDataFromTree,
} from 'react-apollo';
import Html from './client/src/Html';
import App from './client/src/App';
import assets from './assets';

const app = express();

app.use(
  express.static(path.resolve(__dirname, '../client/build'), { index: false }),
);

app.use(async (req, res) => {
  const client = new ApolloClient({
    ssrMode: true,
    networkInterface: createNetworkInterface({
      uri: 'https://31zrkwkkv.lp.gql.zone/graphql',
      opts: {
        credentials: 'include',
        headers: {
          cookie: req.header('Cookie'),
        },
      },
    }),
  });
  const app = (
    <ApolloProvider client={client}>
      <Router location={req.url} context={{}}>
        <App />
      </Router>
    </ApolloProvider>
  );
  await getDataFromTree(app);
  const content = ReactDOMServer.renderToStaticMarkup(app);
  const helmet = Helmet.renderStatic();
  const html = ReactDOMServer.renderToStaticMarkup(
    <Html content={content} helmet={helmet} assets={assets} />,
  );
  res.status(200);
  res.send(`<!doctype html>${html}`);
  res.end();
});

const port = 8888;

app.set('port', port);

app.listen(app.get('port'), () => {
  console.log(`Server started on ${port} port`);
});
