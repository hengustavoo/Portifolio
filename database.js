const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'mysql_db',
  port: 3306,
  user: 'root',
  password: '1212',
  database: 'portifolio',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = connection;