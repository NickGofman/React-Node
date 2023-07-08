const db = require('./database');

/**
 * Execute a single query
 * @param {*} sql
 * @returns query result
 */
async function doQuery(sql, param) {
  const result = await db.query(sql, param);
  console.log(result);
  return result[0];
}

module.exports = doQuery;
