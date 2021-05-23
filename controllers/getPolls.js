const Polls = require('../models/Survey');
const Users = require('../models/User');

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

exports.users = function (req, res) {
        Users.find({ name: {$ne: req.user.name}}).exec(function (err, users) {
                if(err) {
                        return res.send(500,err);
                }
                res.render("userInvates", {
                        id: req.params.currentPoll,
                        user: req.user.name,
                        allUsers: users
                });
        });
};