const doQuery = require('../query');

async function login(req, res) {
  try {
    const { username, password } = req.body;

    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    const result = await doQuery(sql, [username, password]);

    if (result.length === 0) {
      // User not found or invalid credentials
      return res
        .status(401)
        .json({ success: false, error: 'Invalid username or password' });
    }

    // User authenticated
    const user = result[0];

    return res.status(200).json({ success: true, message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
module.exports = login;
