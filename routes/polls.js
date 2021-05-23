const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const polls = require('../controllers/getPolls');

// Your Polls list
router.get('/yourPolls', ensureAuthenticated, function(req, res) {
    polls.list(req,res);
});

router.get('/:id', ensureAuthenticated, function(req, res){
    polls.users(req,res);
});

module.exports = router;