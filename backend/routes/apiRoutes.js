// routes/apiRoutes.js
const express = require('express');
const router = express.Router();

const {
  addEvent,
  deleteEvents,
  getAllEvents,
  getAllEventStyles,
} = require('../database/queries/all-queries');

router.get('/events', getAllEvents);

router.post('/events', addEvent);

router.delete('/events/:eventStyleId', deleteEvents);
router.get('/eventStyles', getAllEventStyles);

module.exports = router;
