import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.resolve(__dirname, 'client/build')));

const port = 8888;

app.set('port', port);

app.listen(app.get('port'), () => {
  console.log(`Server started on ${port} port`);
});
