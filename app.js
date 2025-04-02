/* const express = require('express');
const app = express();
const connection = require('./database'); // Importa a conexão

app.get('/projetos', async (req, res) => {
  try {
    const [rows] = await connection.query('SELECT * FROM projetos');
    res.json(rows);
  } catch (error) {
    console.error('Erro no MySQL:', error);
    res.status(500).send('Erro no servidor');
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
}); */