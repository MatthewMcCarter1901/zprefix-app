const express = require('express');
const app = express();
const cors = require('cors')
const port = 8080;
const knex = require('knex')(require('../back-end/knexfile.js')["development"]);

app.use(cors());

app.get('/invitem', function(req, res) {
    knex
      .select('*')
      .from('invitem')
      .then(data => res.status(200).json(data))
      .catch(err =>
        res.status(404).json({
          message:
            'The data you are looking for could not be found. Please try again'
        })
      );
  });

  app.get('/user', function(req, res) {
    knex
      .select('*')
      .from('user')
      .then(data => res.status(200).json(data))
      .catch(err =>
        res.status(404).json({
          message:
            'The data you are looking for could not be found. Please try again'
        })
      );
  });

//   app.post('/invitem', function(req, res) => {
   
// })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))