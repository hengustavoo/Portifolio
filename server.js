const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'https://devgustavo.com.br',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Sua rota da API
app.get('/api/projetos', async (req, res) => {
  // Lógica para consultar o MySQL
  res.json({ dados: 'seus dados do MySQL aqui' });
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));