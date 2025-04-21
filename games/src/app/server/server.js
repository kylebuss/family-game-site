// This is a simple Express server that connects to a MySQL database and serves data to the client.
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create a connection to the MySQL database - update with your credentials.
const db = mysql.createConnection({
  host: 'localhost',
  user: 'joe',
  password: 'bentivegnagames',
  database: 'bentivegnagames'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database');
});

// Define API endpoints below

// START of API endpoints

// Endpoint to get all games
app.get('/api/games', (req, res) => {
  db.query('SELECT * FROM games', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      return res.json(results);
    }
  });
});

// Endpoint to get all players
app.get('/api/players', (req, res) => {
  db.query('SELECT * FROM players', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      return res.json(results);
    }
  });
});


// END of API endpoints

// Set the port for the server to listen on and start listening for requests
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
