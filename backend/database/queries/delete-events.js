const doQuery = require('../query');

async function deleteEvents(req, res) {
  try {
    console.log(req.params);
    const eventStyleId = req.params.eventStyleId;
    const sql =
      'DELETE FROM events WHERE eventStyleId IN (SELECT eventStyleId FROM eventstyles WHERE eventStyleId = ?)';
    const params = [eventStyleId];
    const result = await doQuery(sql, params);
    if (result.affectedRows === 0) {
      res.json({
        success: true,
        message: 'No events with selected musical style',
      });
    } else {
      res.json({ success: true, message: 'Events deleted successfully' });
    }
  } catch (error) {
    console.error('Error deleting events:', error);
    res.status(500).json({ success: false, error: 'Error deleting events' });
  }
}

module.exports = deleteEvents;
