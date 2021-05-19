const Polls = require('../models/Survey');

exports.list = function (req, res) {
        const userId = req.user.id
        Polls.find({"creator" : userId }).exec(function (err, polls) {
                if (err) {
                        return res.send(500, err);
                }
                res.render('yourPolls', {
                        user: req.user.name,
                        polls: polls
             });
        });
};