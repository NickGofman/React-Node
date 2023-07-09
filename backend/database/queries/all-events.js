const doQuery = require('../query');
/**
 * Delete person and all its dependencies
 * @param {*} req
 * @param {*} res
 */
async function getAllEvents(req, res) {
  try {
    const sql = `SELECT events.eventStyleId, DATE_FORMAT(events.eventDate, '%Y-%m-%d') as eventDate , events.eventTime, events.income, events.eventName, events.eventId, eventstyles.eventStyleName FROM events JOIN eventstyles ON events.eventStyleId = eventstyles.eventStyleId`;
    const result = await doQuery(sql);
    res.json(result);
  } catch (error) {
    console.error('Error retrieving events:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}

module.exports = getAllEvents;
