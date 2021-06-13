const Polls = require('../models/Survey');
const Users = require('../models/User');
const Conn = require('../models/Conn_US');
const Answers = require('../models/Answers');
const Survey = require('../models/Survey');


exports.list = function (req, res) {
        const userId = req.user.id
        Polls.find({"creator" : userId }).exec(function (err, polls) {
                if (err) {
                        return res.send(500, err);
                }
                res.render('yourpolls/yourPolls', {
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
                        });
                        Users.find({ name: {$ne: req.user.name}, _id: {$nin: items}}).exec(function (err, users){
                                if(err){
                                        return res.send(500,err)
                                }
                                res.render("yourpolls/userInvates", {
                                        id: req.body.currentPoll,
                                        user: req.user.name,
                                        allUsers: users,
                                        pollId: req.params.id
                                })
                        })
                }
        })
}; 

exports.invated = function (req, res) {
        Conn.find({ s_id: req.params.id }).exec(function (err, polls) {
                if(err){
                        return res.send(500,err)
                }else{
                        let items = []
                        polls.forEach(element => {
                                items.push(element.u_id)
                        });
                        Users.find({ name: {$ne: req.user.name}, _id: items}).exec(function (err, users){
                                if(err){
                                        return res.send(500,err)
                                }
                                res.render("yourpolls/alreadyInvated", {
                                        id: req.body.currentPoll,
                                        user: req.user.name,
                                        allUsers: users,
                                        pollId: req.params.id
                                })
                        })
                }
        })
};

exports.answers = function (req, res) {
                Survey.find({ _id: req.params.id}).exec(function (err, polls){
                        if(err){
                                return res.send(500,err)
                        }else{
                        let items = []
                        polls.forEach(element => {
                            element.Questions.forEach(element => {
                                items.push(element)
                            });
                            Answers.find({ q_id: req.params.id}).exec(function (err, answers){
                                if(err){
                                        return res.send(500,err)
                                }else{
                                        let answersItems = []
                                        answers.forEach(element => {
                                                answersItems.push(element.Answers)
                                        }); 
                                        res.render("yourpolls/answers", {
                                                id: req.body.currentPoll,
                                                user: req.user.name,
                                                questions: items,
                                                answers: answersItems,
                                                pollId: req.params.id
                                        })
                                }})            
                        })
                }})
        };