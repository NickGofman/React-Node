const doQuery = require('../query');

/**
 * function is responsible for deleting events associated with a specific event style from the database.
 * 
 * @param {*} req - The HTTP request object containing parameters needed for processing (in this case, it expects the eventStyleId as a URL parameter).
 * @param {*} res - The HTTP response object used to send a response back to the client.
 *@returns {JSON} A JSON response with the following possible structures:
 *    - If events are deleted successfully, returns: { success: true, message: 'Events deleted successfully' }
 *    - If there are no events with the selected musical style, returns: { success: true, message: 'No events with selected musical style' }
 *    - If an error occurs during the deletion process, returns: { success: false, error: 'Error deleting events' }
 */
async function deleteEvents(req, res) {
  try {
    const eventStyleId = req.params.eventStyleId;
    const sql =
      'DELETE FROM events WHERE eventStyleId IN (SELECT eventStyleId FROM eventstyles WHERE eventStyleId = ?)';
    const params = [eventStyleId];
    const result = await doQuery(sql, params);
    if (result.affectedRows === 0) {
      res.json({
        success: false,
        message: 'No events with selected musical style',
      });
    } else {
      res.json({ success: true, message: 'Events deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error deleting events' });
  }
}

module.exports = deleteEvents;
