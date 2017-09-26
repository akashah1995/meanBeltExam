import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  newQuestion = {
    name: "",
    question: "",
    answers: []
  }

  constructor(private _service:QuestionService, private _router:Router) { }

  ngOnInit() {
  }

  addQuestion(){
    this._service.addQuestion(this.newQuestion)
    .then(question => {
      console.log("Successfull added question");
       this._router.navigateByUrl('/');
    }
  )
    .catch(err => console.log("There as an error adding the question"))
   
  }

  cancel(){
    this._router.navigateByUrl('/');
  }

  

}
