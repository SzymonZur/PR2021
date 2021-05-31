const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const polls = require('../controllers/getPolls');
const Conn = require('../models/Conn_US');

// Your Polls list
router.get('/yourPolls', ensureAuthenticated, function(req, res) {
    polls.list(req,res);
});

router.get('/yourPolls/:id', ensureAuthenticated, function(req, res){
    polls.users(req,res);
});


router.post('/yourPolls/addTo/:id', (req, res) => {
    const userId = req.body.currentUser
    let pollId = req.params.id
    console.log(`ID usera: ${userId}`);
    console.log(`ID ankiety: ${pollId}`);

    const newConn = new Conn({
        u_id: req.body.currentUser,
        s_id: req.params.id
    });

    newConn.save()
        .then(Conn => {
            req.flash('success_msg', 'You are created new Conn');
            res.redirect('/dashboard');
        })
        .catch(err => console.log(err));
})

router.post('/yourPolls/delete/:id', (req, res) => {
    const userId = req.body.currentUser
    let pollId = req.params.id
    console.log(`ID usera: ${userId}`);
    console.log(`ID ankiety: ${pollId}`);
})

module.exports = router;