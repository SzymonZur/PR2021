const Polls = require('../models/Survey');
const Conn = require('../models/Conn_US');

exports.answerPoll = function (req, res) {
    Conn.find({ u_id: req.user.id, answer: false }).exec(function (err, conn) {
            if(err){
                    return res.send(500,err)
            }else{
                    let items = []
                    conn.forEach(element => {
                            items.push(element.s_id)
                    });
                    Polls.find({ _id: items }).exec(function (err, polls){
                            if(err){
                                    return res.send(500,err)
                            }
                            res.render("answerpolls/manage", {
                                    user: req.user.name,
                                    polls: polls
                            })
                    })
            }
    })
};

exports.getQuest = function (req, res) {
        Polls.find({ _id: req.params.id }).exec(function (err, polls) {
                if(err){
                        return res.send(500,err)
                }
                res.render("answerpolls/questions", {
                        user: req.user.name,
                        id: req.params.id,
                        polls: polls
                })  ;     
        });
}
