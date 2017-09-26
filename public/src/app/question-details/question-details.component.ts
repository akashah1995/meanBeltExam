import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {

  questions = [];
  id;
  question;
  answers = [];


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

  like(answerIndex, questionId){
    this.getQuestion(questionId);
    this.question.answers[answerIndex].likes = this.question.answers[answerIndex].likes + 1;
    this._service.updateQuestion(this.question)
    .then(question => {
      this.getQuestions()
      this._router.navigateByUrl('/question/' + this.id);
    })

  }

}
