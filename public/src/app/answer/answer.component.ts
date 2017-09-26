import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  id;
  questions;
  question;
  newAnswer = {
    name: '',
    answer: '',
    details: '',
    likes: 0
  }

  constructor(private _service: QuestionService, private _router: Router, private _aroute: ActivatedRoute) {
    this._aroute.params.subscribe(
      (params) => { this.id = params.id;
      console.log("This is the id the route is passing");
      console.log(this.id); }
    );
    this.getQuestions();
   }

  ngOnInit() {
  }

  getQuestions(){
    this._service.getQuestions()
    .then(questions => {this.questions = questions
    console.log(this.questions);
    this.getQuestion(this.id);}
  )
    .catch(err => console.log("issue with getting questions, inside detail comp."))
  }

  getQuestion(id){
    for(let i = 0; i < this.questions.length; i++){
      if (this.questions[i]._id === id){
        this.question = this.questions[i];
        console.log(this.question);
        // this.answers = this.question.answers;
      }
    }

  }

  addAnswer(id){
    console.log("Got in the add Answer");
    this.getQuestion(id);
    this.question.answers.push(this.newAnswer);
    this._service.updateQuestion(this.question)
    .then(question => {
      this.getQuestions()
      console.log(id);
      this._router.navigateByUrl('/question/' + id);;
    })
    .catch(err => {
      console.log("The question was not updated with a new answer");
    })
  }

  cancel(id){
    console.log("Cancelling");
    console.log(id);
    this._router.navigateByUrl('/question/' + id);
  }

}
