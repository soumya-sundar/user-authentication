import express from 'express';
import apiRouter from './serverRouter';
import axios from 'axios';
import config from './config';
import serverRender from './serverRender';
import bodyParser from 'body-parser';
const server = express();

server.use(bodyParser.json());
server.set('view engine', 'ejs');

server.get(['/', '/api'], (req, res) => {
    serverRender()
    .then((resp) => {
      res.render('index', {
        initialData: resp
      });
    })
    .catch(error => {
      //console.error(error);
      res.send(error);
    });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express listening on port %d and host %s', config.port, config.host);
});
