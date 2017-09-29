import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Html from './client/src/Html';
import App from './client/src/App';

const app = express();

// app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use((req, res) => {
  res.status(200);
  const content = ReactDOM.renderToString(<App />);
  res.send(ReactDOM.renderToStaticMarkup(<Html content={content} />));
  res.end();
});

const port = 8888;

app.set('port', port);

app.listen(app.get('port'), () => {
  console.log(`Server started on ${port} port`);
});
