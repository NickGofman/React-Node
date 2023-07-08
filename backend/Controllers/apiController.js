

const { addEvent, deleteEvents } = require('../database/queries/all-queries');

module.exports = function (app) {


  app.all('*', (req, res) => {
    res.status(404).send('resource not found');
  });
};
