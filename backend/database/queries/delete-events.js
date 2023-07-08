const doQuery = require('../query');

/**
 * Delete person and all its dependencies
 * @param {*} req
 * @param {*} res
 */
async function deleteEvents(req, res) {
  // delete from the database - defined with cascade
  // all dependencies will be removed

  // const id = req.params.id;

  // console.log(req.params);
  // let param = [id];
  // // delete from database
  // const sql = `DELETE FROM people WHERE id =?`;

  // const result = await doQuery(sql, param);

  // // send response
  // res.json({
  //   success: true,
  // });
}

module.exports = deleteEvents;
