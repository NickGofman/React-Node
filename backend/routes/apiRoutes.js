// routes/apiRoutes.js
const express = require('express');
const router = express.Router();

const {
  addEvent,
  deleteEvents,
  getAllEvents,
  getAllEventStyles,
} = require('../database/queries/all-queries');

//route to get all events fro, the database
router.get('/events', getAllEvents);

//route to add event to the database
router.post('/events', addEvent);

//route to delete event from the database
router.delete('/events/:eventStyleId', deleteEvents);

//route to get all event styles
router.get('/eventStyles', getAllEventStyles);

module.exports = router;
