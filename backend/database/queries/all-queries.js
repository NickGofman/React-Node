const addEvent = require('./add-event');
const getAllEvents = require('./all-events');
const deleteEvents = require('./delete-events');
const getAllEventStyles = require('./all-events-styles');
const login = require('./login');
const register = require('./register');

module.exports = {
  deleteEvents,
  addEvent,
  getAllEvents,
  getAllEventStyles,
  login,
  register,
};
