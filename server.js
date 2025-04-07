const express = require('express');
const path = require('path');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

// Conexão com MySQL
const db = mysql.createConnection({
  host: '168.75.109.128',
  user: 'myroot',
  password: '1212',
  database: 'mysql_db',
  port: 3306
});

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar no MySQL:', err);
  } else {
    console.log('Conectado ao MySQL!');
  }
});

// Servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Rota para API
app.get('/api/projetos', (req, res) => {
  db.query('SELECT * FROM projetos', (err, results) => {
    if (err) {
      console.error('Erro na query:', err);
      res.status(500).json({ erro: 'Erro ao buscar projetos' });
    } else {
      res.json(results);
    }
  });
});

// Rota padrão para a SPA
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`App rodando em http://localhost:${PORT}`);
});
