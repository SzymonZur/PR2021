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

    
    /// Stara wersja, zła - z promises nie wyciągniemy łatwo zmiennej

    // Survey.find({ "creator" : userId})
    //     .then(survey => {
    //         survey.forEach(element => {
    //             console.log(element.topic);
    //         });
    //     })
    
    /// PO WIELU PROBACH SIE UDALO - bardzo wazne
    Survey.find({ 'creator': userId }, function (err, docs) {
        docs.forEach(element => {
            console.log(element.topic);
        })
      });

})



module.exports = router;