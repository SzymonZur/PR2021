const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const bcrpyt = require('bcryptjs'); 

const polls = require('../controllers/getQuestion');

const Conn = require('../models/Conn_US');
const Answers = require('../models/Answers');

router.get('/manage', ensureAuthenticated, function(req, res) {
    polls.answerPoll(req,res);
});


router.get('/manage/:id', ensureAuthenticated, function(req, res) {
    polls.getQuest(req,res);
});

router.post('/saveAnswer/:id', (req,res) =>{ 
    let answer = new Array();
    let answerHash = new Array();
    answer = req.body.answer;
    answerHash == req.body.answer;
    const pollId = req.params.id
    const userId = req.user.id

    answerHash.push(userId)
    let newVar = answerHash.join()

        bcrpyt.genSalt(10, (err, salt) => 
        bcrpyt.hash(newVar, salt, (err, hash) =>{
            if(err) throw err;

            const NewAnswer = new Answers({
                Answers: answer,
                q_id: pollId,
                Hash: hash
            });
            NewAnswer.save()

            Conn.findOneAndUpdate({u_id: userId, s_id: pollId}, {$set:{answer:true}}, {new: true, useFindAndModify: false}, (err, doc) => {
                if (err) {
                    console.log("Something wrong when updating data!");
                }
            })
            .then(Conn => {
                req.flash('success_msg', `You are answered for poll. Save that key in your computer to future check for your answers: ${hash}`);
                res.redirect('/dashboard');
            })
        }))
})

module.exports = router;