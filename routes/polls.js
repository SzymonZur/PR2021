const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const polls = require('../controllers/getPolls');

// Your Polls list
router.get('/yourPolls', ensureAuthenticated, function(req, res) {
    polls.list(req,res);
});

module.exports = router;