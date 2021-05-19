const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const { insertMany } = require('../models/Survey');

const Survey = require('../models/Survey')

// Create Survey 
router.get('/createSurvey', ensureAuthenticated ,(req, res) => 
    res.render('createSurvey', {
        user: req.user.name
    }));

router.post('/createSurvey', (req,res) =>{ 
    const { topic, description, question} = req.body;
    let errors = [];

    user = req.user.name;
    userId = req.user.id;
    
    if(!topic || !description || !question) {
        errors.push({ msg: 'Please fill in all fields'});
    }
    
    if(errors.length > 0 ) {
        res.render('createSurvey', {
            errors,
            user,
            topic,
            description
        })
    }else {
        const newSurvey = new Survey({
            creator: userId,
            topic,
            description,
            Questions: question
        });

        newSurvey.save()
            .then(Survey => {
                req.flash('success_msg', 'You are created new Survey');
                res.redirect('/dashboard');
            })
            .catch(err => console.log(err));
    }

    
})
module.exports = router;