var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = {

    showQuestions: function(req, res){
        Question.find({}, function(err, questions){
            console.log("Players printing from server side.");
            console.log(questions);
            return res.json(questions);
        })
    },

    addQuestion: function(req, res){
        console.log("Attempting to create question. Server side.");
        console.log(req.body);
        Question.create(req.body, (err, question) => {
            if(err){
                console.log("There was an error during the creation");
                return res.json(err);
            }

            else{
                return res.json(question);
            }
        })
    },

    updateQuestion: function(req, res){
        console.log("Attempting to update a question server side.");
        console.log(req.body);
        Question.findOne({_id: req.params.id}, (err, question) => {
            if(err){
                console.log("Can't find player with that id");
                return res.json(err);
            }else{
                for (var key in req.body){
                    question[key] = req.body[key];
                }
                question.save(function(err) {
                    if(err){
                        console.log("Could not save the player, server side");
                        return res.json(err);
                    }

                    else{
                        return res.json(question);
                    }
                })
            }


        })


    },






}