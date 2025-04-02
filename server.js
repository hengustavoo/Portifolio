// const express = require("express");
// const app = express();

// app.use(express.static("public"));

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/public/index.html");
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Servidor rodando em http://localhost:${PORT}`);
// });

const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql2/promise');
const cors = require('cors'); // Importe o pacote

app.use(cors());

// Configuração do MySQL (usará variáveis de ambiente)
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'mysql_db',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_USER_PASSWORD || '1212',
  database: process.env.DB_NAME || 'portifolio'
});

// Middleware para servir arquivos estáticos (frontend)
app.use(express.static(path.join(__dirname, 'public')));

// Rota API (exemplo)
app.get('/api/projetos', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM projetos');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota padrão para o frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});