const bcrypt = require('bcrypt');
const doQuery = require('../query');

async function login(req, res) {
  try {
    const { username, password } = req.body;

    const sql = 'SELECT * FROM users WHERE username = ?';
    const result = await doQuery(sql, [username]);

    if (result.length === 0) {
      // User not found
      return res
        .status(401)
        .json({ success: false, error: 'Invalid username or password' });
    }

    const user = result[0];

    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      // Invalid password
      return res
        .status(401)
        .json({ success: false, error: 'Invalid username or password' });
    }

    // User authenticated
    return res.status(200).json({ success: true, message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}

module.exports = login;
