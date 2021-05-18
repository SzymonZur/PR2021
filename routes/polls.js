const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

const Survey = require('../models/Survey')

// Dashboard page
router.get('/yourPolls', ensureAuthenticated ,(req, res) => {
    res.render('yourPolls', {
        user: req.user.name
    })
    const userId = req.user.id;

    /// PO WIELU PROBACH SIE UDALO - bardzo wazne

    Survey.find({ "creator" : userId})
        .then(survey => {
            survey.forEach(element => {
                console.log(element.topic);
            });
        })

})



module.exports = router;