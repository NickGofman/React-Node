const doQuery = require('../query');
/**
 * Retrieves all events from the database, along with their associated event style names.
 * Sends the combined event data as a JSON response to the client.
 * @param {*} req - The HTTP request object.
 * @param {*} res - The HTTP response object used to send a   response back to the client.
 *@returns {JSON} A JSON response containing an array of event data, or an error message if an error occurs.
 */
async function getAllEvents(req, res) {
  try {
    const sql = `SELECT events.eventStyleId, DATE_FORMAT(events.eventDate, '%Y-%m-%d') as eventDate , events.eventTime, events.income, events.eventName, events.eventId, eventstyles.eventStyleName FROM events JOIN eventstyles ON events.eventStyleId = eventstyles.eventStyleId`;
    const result = await doQuery(sql);
    res.json(result);
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}

module.exports = getAllEvents;
