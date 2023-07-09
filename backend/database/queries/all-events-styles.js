const doQuery = require('../query');

async function getAllEventStyles(req, res) {
  const sql = 'SELECT * FROM eventstyles';
  try {
    const result = await doQuery(sql);
    res.json(result);
  } catch (error) {
    console.log('Error retrieving event styles:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
module.exports = getAllEventStyles;
