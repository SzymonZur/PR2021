const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const hash = require('hash.js'); 

const Answers = require('../models/Answers');
const Poll = require('../models/Survey');

router.get('/insertHash', ensureAuthenticated, function(req, res) {
    res.render('checkhash/insertHash')
});

router.post('/verifyHash', (req,res) =>{ 
    const inputHash = req.body.hash
    const userId = req.user.id

    Answers.find({ Hash: inputHash }).exec(function (err, answers) {
        if(err){
                return res.send(500,err)
        }else{
        let userAnswers = new Array()
        let item = []
        answers.forEach(element => {
            element.Answers.forEach(element => {
                item.push(element)
                userAnswers.push(element)
            });
        });
        item.push(userId)

        const newVar = item.join()
        const newHash = hash.sha256().update(newVar).digest('hex')
        
        let id_question 
        answers.forEach(element => {
            id_question = element.q_id
        });
            if(inputHash == newHash){
                Poll.find({ _id: id_question }).exec(function (err, polls) {
                    if(err){
                            return res.send(500,err)
                    }else{
                        let items = []
                        polls.forEach(element => {
                            element.Questions.forEach(element => {
                                items.push(element)
                            });
                        });
                        res.render("checkHash/verfiedHash", {
                            answers: userAnswers,
                            polls: items
                    });   
                }
            }
        )}else{
            req.flash('error_msg', 'Your hash is incorrect or someone changed your data');
            res.redirect('back');
        }
    }});
})


module.exports = router;