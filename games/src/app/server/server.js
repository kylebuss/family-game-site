const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

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

// Define API endpoints
app.get('/api/games', (req, res) => {
  db.query('SELECT * FROM games', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      return res.json(results);
    }
  });
});

app.get('/api/players', (req, res) => {
  db.query('SELECT * FROM players', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      return res.json(results);
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
