const bcrypt = require('bcrypt');
const doQuery = require('../query');

/**
 *function handles user login attempts by verifying the provided username and password against the database records.
 * If the user is successfully authenticated, it responds with a JSON indicating a successful login; otherwise, it sends a JSON indicating an error or invalid credentials.
 *
 * @param {*} req - The HTTP request object containing the user's login credentials (username and password) in the req.body object.
 * @param {*} res - The HTTP response object used to send a response back to the client.
 * @returns {JSON} A JSON response with the following possible structures:
 *    - If the login is successful, returns: { success: true, message: 'Login successful' }
 *    - If the provided username or password is incorrect, returns: { success: false, error: 'Invalid username or password' }
 *    - If an error occurs during the login process, returns: { success: false, error: 'Internal Server Error' }
 */
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
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}

module.exports = login;
