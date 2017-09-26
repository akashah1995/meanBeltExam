import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions;
  
  constructor(private _service: QuestionService, private _router: Router) {
    this.getQuestions();
  }

  ngOnInit() {
  }

  getQuestions(){
    this._service.getQuestions()
    .then(questions => this.questions = questions)
    .catch(err => console.log("issue with getting questions"))
  }




}
