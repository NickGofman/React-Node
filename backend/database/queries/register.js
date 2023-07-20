const bcrypt = require('bcrypt');
const doQuery = require('../query');

/**
 * function handles user registration by creating a new user account with the provided username and password.
 * Before registration, it checks if the username already exists in the database. If it does, it responds with a JSON indicating that the username is already taken.
 * Otherwise, it proceeds with hashing the provided password using bcrypt, inserts the new user data into the database, and responds with a JSON indicating successful registration.
 *
 * @param {*} req - The HTTP request object containing the user's registration credentials (username and password) in the req.body object.
 * @param {*} res - The HTTP response object used to send a response back to the client.
 * @returns {JSON} A JSON response with the following possible structures:
 *    - If the registration is successful, returns: { success: true, message: 'Registration successful' }
 *    - If the provided username already exists, returns: { success: false, error: 'Username already exists' }
 *    - If an error occurs during the registration process, returns: { success: false, error: 'Internal Server Error' }
 */

async function register(req, res) {
  try {
    const { username, password } = req.body;

    // Check if the username already exists in the database
    const checkUsernameQuery = 'SELECT * FROM users WHERE userName = ?';
    const checkUsernameParams = [username];
    const existingUser = await doQuery(checkUsernameQuery, checkUsernameParams);

    if (existingUser.length > 0) {
      // Username already exists
      return res
        .status(400)
        .json({ success: false, error: 'Username already exists' });
    }

    // Hash the password using bcrypt
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Perform registration logic with username and hashed password
    const insertUserQuery =
      'INSERT INTO users (username, password) VALUES (?, ?)';
    const insertUserParams = [username, hashedPassword];
    await doQuery(insertUserQuery, insertUserParams);

    res.status(200).json({ success: true, message: 'Registration successful' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}

module.exports = register;
