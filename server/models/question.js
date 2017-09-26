var mongoose = require('mongoose');

var questionSchema = new mongoose.Schema({
    name: {type: String, required: true, min:2},
    question: {type: String, required: true, min:10},
    answers: []},
    {timestamps: true });

mongoose.model('Question', questionSchema);
var Question = mongoose.model('Question');

        // name: String, required: true,
        // response: String, required: true, min:5