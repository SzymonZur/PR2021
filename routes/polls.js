const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const polls = require('../controllers/getPolls');

// Your Polls list
router.get('/yourPolls', ensureAuthenticated, function(req, res) {
    polls.list(req,res);
});

router.get('/yourPolls/:id', ensureAuthenticated, function(req, res){
    polls.users(req,res);
    req.flash('pollId', req.params.id)
});


router.post('/yourPolls/addTo/:id', (req, res) => {
    const userId = req.body.currentUser
    let pollId = req.params.id
    console.log(`ID usera: ${userId}`);
    console.log(`ID ankiety: ${pollId}`);
})

module.exports = router;