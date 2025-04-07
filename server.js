const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'https://devgustavo.com.br' }));

const connection = mysql.createConnection({
  host: 'mysql.devgustavo.com.br',
  user: 'myroot',
  password: '1212',
  database: 'mysql_db'
});

app.get('/api/projetos', (req, res) => {
  connection.query('SELECT * FROM projetos', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('API rodando em http://localhost:3000');
});