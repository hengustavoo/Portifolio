const mysql = require('mysql2/promise'); // Usando versão com Promises

// Configurações da conexão (ajuste conforme seu container)
const connection = mysql.createPool({
  host: '137.131.188.67',      // Ou '127.0.0.1' (mesma máquina)
  port: 3306,            // Porta mapeada no Docker
  user: 'root',          // Usuário do MySQL
  password: '1212', // Senha definida no container
  database: 'portifolio', // Nome do banco (opcional)
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = connection;