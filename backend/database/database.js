const mysql = require('mysql2');


//module that creates a pool connection to the database

const pool = mysql.createPool({
  connectionLimit: 100,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'final_stage',
});

module.exports = pool.promise();
