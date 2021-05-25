const mongoose = require('mongoose');

const ConnUsSchema = new mongoose.Schema({
    u_id: {
        type: String,
        required: true
    },
    s_id: {
        type: String,
        required: true
    },
    answer: {
        type: Boolean,
        required: true,
        default: false
    },
});

const ConnUS = mongoose.model('Conn_US', ConnUsSchema);

module.exports = ConnUS;