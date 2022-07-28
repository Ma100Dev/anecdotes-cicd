/* eslint-disable no-console */
const jsonServer = require('json-server');
const path = require('path');
const express = require('express');
const reset = require('json-server-reset');

const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;

let router;
if (ENV.toUpperCase() === 'PRODUCTION') {
  router = jsonServer.router(path.join(__dirname, 'db.json'));
} else if (ENV.toLocaleUpperCase() === 'DEVELOPMENT') {
  router = jsonServer.router(
    {
      'anecdotes': [
        {
          'content': 'If it hurts, do it more often',
          'id': '47145',
          'votes': 0
        },
        {
          'content': 'Adding manpower to a late software project makes it later!',
          'id': '21149',
          'votes': 0
        },
        {
          'content': 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
          'id': '69581',
          'votes': 0
        },
        {
          'content': 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
          'id': '36975',
          'votes': 0
        },
        {
          'content': 'Premature optimization is the root of all evil.',
          'id': '25170',
          'votes': 0
        },
        {
          'content': 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
          'id': '98312',
          'votes': 0
        },
      ]
    }
  );
} else {
  console.error('Unknown environment:', ENV);
  process.exit(1);
}

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../frontend/build/index.html'));
});
server.use(reset);
server.use(middlewares);
server.use('/api', router);
server.listen(PORT, () => {
  console.log('JSON Server is running');
});
// Serve static files from the React frontend app
server.use(express.static(path.join(__dirname, '../frontend/build')));