const Polls = require('../models/Survey');
const Users = require('../models/User');
const Conn = require('../models/Conn_US');


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
        Conn.find({ s_id: req.params.id }).exec(function (err, polls) {
                if(err){
                        return res.send(500,err)
                }else{
                        let items = []
                        polls.forEach(element => {
                                items.push(element.u_id)
                                console.log(element.u_id);
                        });
                        Users.find({ name: {$ne: req.user.name}, _id: {$nin: items}}).exec(function (err, users){
                                if(err){
                                        return res.send(500,err)
                                }
                                res.render("userInvates", {
                                        id: req.body.currentPoll,
                                        user: req.user.name,
                                        allUsers: users,
                                        pollId: req.params.id
                                })
                        })
                }
        })
};