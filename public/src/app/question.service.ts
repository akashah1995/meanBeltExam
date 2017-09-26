import { Injectable } from '@angular/core';
import {Http } from '@angular/http';
import "rxjs";
import {Observable} from "rxjs";


@Injectable()
export class QuestionService {
  questions;

  constructor(private _http: Http) { 
    this.getQuestions();
  }

  getQuestions(){
    console.log("Got to service to get all Questions");
    return this._http.get("/questions").map(data => data.json()).toPromise()
  }

  addQuestion(question){
    console.log("Got to service for adding question");
    return this._http.post("/questions", question).map(data => data.json()).toPromise()
  }

  updateQuestion(question){
    console.log("Got the service, update");
    return this._http.put("/questions/" + question._id, question).map(data => data.json()).toPromise()
  }








}
