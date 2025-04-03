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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});