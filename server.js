const express = require('express');
const path = require('path');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

const db = mysql.createConnection({
  host: '168.75.109.128',
  user: 'myroot',
  password: '1212',
  database: 'portifolio',
  port: 3306
});

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar no MySQL:', err);
  } else {
    console.log('Conectado ao MySQL!');
  }
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/projetos', (req, res) => {
  console.log('🔍 Rota /api/projetos chamada...');

  db.query('SELECT * FROM projetos', (err, results) => {
    if (err) {
      console.error('❌ ERRO AO CONSULTAR PROJETOS:');
      console.error(err); // Mostra tudo
      return res.status(500).json({ erro: 'Erro ao buscar projetos' });
    }

    console.log('✅ Consulta realizada com sucesso!');
    console.log(results);
    res.json(results);
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`App rodando em http://localhost:${PORT}`);
});
