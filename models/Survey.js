const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
    creator:{
      type:String,
      requried: true  
    },
    topic: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    Questions: {  
        type: Array,
        required: true
    },
});

const Survey = mongoose.model('Survey', SurveySchema);

module.exports = Survey;