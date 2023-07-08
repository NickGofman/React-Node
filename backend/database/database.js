const mysql = require('mysql2');

// we need multiple connections to execute queries in parallel
// It would be a bad practice to open a new connection for each request in  Node.js application since connecting to the database is a relatively expensive operation, //
// we may want to consider using a connection pool. Keeping a few connections open and pulling a free connection out of the pool when you need it will be more efficient than opening and closing a new connection for each request.

//   mysql.createPool is a place where connections get stored. it handles multiple connections.
// When you request a connection from a pool,you will receive a connection that is not currently being used, or a new connection.
// If you’re already at the connection limit, it will wait until a connection is available before it continues.

const pool = mysql.createPool({
  connectionLimit: 100, //important
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'final_stage',
});

module.exports = pool.promise();
