const doQuery = require('../query');


/** 
 * function handles the addition of new events based on incoming HTTP requests
  @param {*} req - The HTTP request object containing data related to the event to be added. The event data is expected to be available in the req.body object.
  @param {*} res - The HTTP response object used to send a response back to the client.
  @returns {JSON} A JSON response containing the event data that was added, or an error message if an error occurs.
 */
async function addEvent(req, res) {
  try {
    const { eventStyleName, ...eventData } = req.body;
    const sql = 'INSERT INTO events SET ?';
    await doQuery(sql, eventData);
    res.status(200).json(eventData);
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}

module.exports = addEvent;
