const doQuery = require('../query');

/**
function is responsible for retrieving all event styles from the database and sending them as a JSON response to the client.
@param {*} req - The HTTP request object
@param {*} res - The HTTP response object used to send a response back to the client.
**/
async function getAllEventStyles(req, res) {
  const sql = 'SELECT * FROM eventstyles';
  try {
    const result = await doQuery(sql);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
module.exports = getAllEventStyles;
