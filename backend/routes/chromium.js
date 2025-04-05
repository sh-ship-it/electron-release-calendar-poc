const express = require('express');
const router = express.Router();
const { fetchReleaseSchedule } = require('../services/chromiumService');

router.get('/schedule', async (req, res) => {
  try {
    const data = await fetchReleaseSchedule();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch schedule' });
  }
});

module.exports = router;
