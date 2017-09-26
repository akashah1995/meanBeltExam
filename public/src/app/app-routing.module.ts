import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionListComponent } from './question-list/question-list.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { AnswerComponent } from './answer/answer.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: QuestionListComponent},
  {path: 'new_question', pathMatch: 'full', component: NewQuestionComponent},
  {path: 'question/:id', pathMatch: 'full', component: QuestionDetailsComponent},
  {path: 'question/:id/new_answer', pathMatch: 'full', component:AnswerComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
