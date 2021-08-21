const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'mysql-db',
  user: 'root',
  password: 'coding',
  database: 'Customers'
})

module.exports = connection
