const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const hash = require('hash.js'); 

const polls = require('../controllers/getQuestion');

const Conn = require('../models/Conn_US');
const Answers = require('../models/Answers');

router.get('/manage', ensureAuthenticated, function(req, res) {
    polls.answerPoll(req,res);
});


router.get('/manage/:id', ensureAuthenticated, function(req, res) {
    polls.getQuest(req,res);
});

router.post('/saveAnswer/:id', ensureAuthenticated, function(req,res){ 
    let answer = new Array();
    answer = req.body.answer;
    let hashAnswer = [...answer]
    const pollId = req.params.id
    const userId = req.user.id

    hashAnswer.push(userId)
    let newVar = hashAnswer.join()

            const newHash = hash.sha256().update(newVar).digest('hex')

            const NewAnswer = new Answers({
                Answers: answer,
                q_id: pollId,
                Hash: newHash
            });
            NewAnswer.save()

            Conn.findOneAndUpdate({u_id: userId, s_id: pollId}, {$set:{answer:true}}, {new: true, useFindAndModify: false}, (err, doc) => {
                if (err) {
                    console.log("Something wrong when updating data!");
                }
            })
            .then(Conn => {
                req.flash('success_msg', `You are answered for poll. Save that key in your computer to future check for your answers: ${newHash}`);
                res.redirect('/dashboard');
            })
})

module.exports = router;