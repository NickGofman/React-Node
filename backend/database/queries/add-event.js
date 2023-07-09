const doQuery = require('../query');

async function addEvent(req, res) {
  try {
    const { eventStyleName, ...eventData } = req.body; // Assuming the event data is available in the request body
    const sql = 'INSERT INTO events SET ?';
    await doQuery(sql, eventData);
    res.status(200).json(eventData);
  } catch (error) {
    console.error('Error adding event:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}

module.exports = addEvent;
