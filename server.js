const express = require('express');
const cors = require('cors');

const app = express();

// Configuração detalhada do CORS
const corsOptions = {
  origin: 'https://devgustavo.com.br',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));

// Suas rotas
app.get('/api/projetos', (req, res) => {
  res.json([{id: 1, nome: "Projeto Exemplo"}]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
