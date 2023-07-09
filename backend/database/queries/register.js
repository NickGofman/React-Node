const doQuery = require('../query');

async function register(req, res) {
  try {
    const { username, password } = req.body; // Assuming the username and password are available in the request body

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

    // Perform registration logic with username and password
    // You can use the `doQuery` function or any other method to interact with your database

    // Example code using `doQuery` to insert the user into the database
    const insertUserQuery =
      'INSERT INTO users (username, password) VALUES (?, ?)';
    const insertUserParams = [username, password];
    await doQuery(insertUserQuery, insertUserParams);

    res.status(200).json({ success: true, message: 'Registration successful' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
module.exports = register;
