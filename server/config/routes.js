var path = require('path');
var questions = require('../controllers/questions.js');
module.exports = function(app){

    app.get('/questions', (req, res, next) => {
        console.log("Got to the get route for players");
        questions.showQuestions(res, res);
    });

    app.post('/questions', (req,res,next) => {
        console.log("Attempting to create a questions: (routes)");
        console.log(req.body);
        questions.addQuestion(req, res);
    });

    app.put('/questions/:id',(req, res, next) => {
        console.log("Got to the update route");
        questions.updateQuestion(req, res);
    });

    app.all("*", (req,res,next) => {
         console.log("Hit the random route");
            res.sendFile(path.resolve("./public/dist/index.html"))
    });
}



