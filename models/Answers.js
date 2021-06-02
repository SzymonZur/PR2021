const mongoose = require('mongoose');

const AnswersSchema = new mongoose.Schema({
    Answers: {  
        type: Array,
        required: true
    },
    q_id: {
        type: String,
        required: true
    },
    Hash: {
        type: String,
        required: true
    }
});

const Answers = mongoose.model('Answer', AnswersSchema);

module.exports = Answers;