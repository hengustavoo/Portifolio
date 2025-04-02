const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'mysql_db',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_USER_PASSWORD || '1212',
  database: process.env.DB_NAME || 'portifolio'
});

app.use(express.static(path.join(__dirname, 'public')));

/* app.get('/api/projetos', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM projetos');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
}); */

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});