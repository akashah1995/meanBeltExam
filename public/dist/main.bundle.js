webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/answer/answer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".red{\n    color:red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/answer/answer.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <p id = \"Home\"> <a [routerLink] = \"['']\"> Home | </a><a href = \"/question/{{question._id}}\"> Go Back to Question </a></p>\n  <h1>{{question.question}}</h1>\n  <form #formData = 'ngForm' (submit) = 'addAnswer(question._id)'>\n    <p> Name <input\n    type = \"text\"\n    name = \"name\"\n    minlength = \"2\"\n    required\n    [(ngModel)] = 'newAnswer.name'\n    #name = 'ngModel'>\n    <span *ngIf = 'name.errors' class = 'red'> Name Field Incomplete </span> </p>\n\n    \n    <p> Answer <input\n    type = \"text\"\n    name = \"answer\"\n    minlength = \"5\"\n    required\n    [(ngModel)] = 'newAnswer.answer'\n    #answer = 'ngModel'>\n    <span *ngIf = 'answer.errors' class = 'red'> Answer must be 5 Characters! </span> </p>\n\n    <p> Details <input\n    type = \"text\"\n    name = \"details\"\n    [(ngModel)] = 'newAnswer.details'\n    #details = 'ngModel'>\n    <span *ngIf = 'details.errors' class = 'red'> Answer must be 5 Characters! </span> </p>\n\n\n\n    <p><button id = \"cancel\" (click) = 'cancel(question._id)'>Cancel</button><input type = \"submit\" value = \"Submit\" [disabled] = '!formData.valid'></p>\n\n  </form>\n\n"

/***/ }),

/***/ "../../../../../src/app/answer/answer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnswerComponent = (function () {
    function AnswerComponent(_service, _router, _aroute) {
        var _this = this;
        this._service = _service;
        this._router = _router;
        this._aroute = _aroute;
        this.newAnswer = {
            name: '',
            answer: '',
            details: '',
            likes: 0
        };
        this._aroute.params.subscribe(function (params) {
            _this.id = params.id;
            console.log("This is the id the route is passing");
            console.log(_this.id);
        });
        this.getQuestions();
    }
    AnswerComponent.prototype.ngOnInit = function () {
    };
    AnswerComponent.prototype.getQuestions = function () {
        var _this = this;
        this._service.getQuestions()
            .then(function (questions) {
            _this.questions = questions;
            console.log(_this.questions);
            _this.getQuestion(_this.id);
        })
            .catch(function (err) { return console.log("issue with getting questions, inside detail comp."); });
    };
    AnswerComponent.prototype.getQuestion = function (id) {
        for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i]._id === id) {
                this.question = this.questions[i];
                console.log(this.question);
                // this.answers = this.question.answers;
            }
        }
    };
    AnswerComponent.prototype.addAnswer = function (id) {
        var _this = this;
        console.log("Got in the add Answer");
        this.getQuestion(id);
        this.question.answers.push(this.newAnswer);
        this._service.updateQuestion(this.question)
            .then(function (question) {
            _this.getQuestions();
            console.log(id);
            _this._router.navigateByUrl('/question/' + id);
            ;
        })
            .catch(function (err) {
            console.log("The question was not updated with a new answer");
        });
    };
    AnswerComponent.prototype.cancel = function (id) {
        console.log("Cancelling");
        console.log(id);
        this._router.navigateByUrl('/question/' + id);
    };
    return AnswerComponent;
}());
AnswerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-answer',
        template: __webpack_require__("../../../../../src/app/answer/answer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/answer/answer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], AnswerComponent);

var _a, _b, _c;
//# sourceMappingURL=answer.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_list_question_list_component__ = __webpack_require__("../../../../../src/app/question-list/question-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_question_new_question_component__ = __webpack_require__("../../../../../src/app/new-question/new-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_details_question_details_component__ = __webpack_require__("../../../../../src/app/question-details/question-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__answer_answer_component__ = __webpack_require__("../../../../../src/app/answer/answer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__question_list_question_list_component__["a" /* QuestionListComponent */] },
    { path: 'new_question', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_3__new_question_new_question_component__["a" /* NewQuestionComponent */] },
    { path: 'question/:id', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_4__question_details_question_details_component__["a" /* QuestionDetailsComponent */] },
    { path: 'question/:id/new_answer', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_5__answer_answer_component__["a" /* AnswerComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n <router-outlet></router-outlet> \n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_list_question_list_component__ = __webpack_require__("../../../../../src/app/question-list/question-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_question_new_question_component__ = __webpack_require__("../../../../../src/app/new-question/new-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__question_details_question_details_component__ = __webpack_require__("../../../../../src/app/question-details/question-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__answer_answer_component__ = __webpack_require__("../../../../../src/app/answer/answer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







 // <-- Import FormsModule
 // <-- Import HttpModule


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__question_list_question_list_component__["a" /* QuestionListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__new_question_new_question_component__["a" /* NewQuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_6__question_details_question_details_component__["a" /* QuestionDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__answer_answer_component__["a" /* AnswerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__question_service__["a" /* QuestionService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".red{\n    color:red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <p id = \"Home\"> <a [routerLink] = \"['']\"> Home </a>\n  <form #formData = 'ngForm' (submit) = 'addQuestion()'>\n    <p> Name <input\n    type = \"text\"\n    name = \"name\"\n    minlength = \"2\"\n    required\n    [(ngModel)] = 'newQuestion.name'\n    #name = 'ngModel'>\n    <span *ngIf = 'name.errors' class = 'red'> Name Field Incomplete </span> </p>\n\n    \n    <p>Question <input\n    type = \"text\"\n    name = \"question\"\n    minlength = \"10\"\n    required\n    [(ngModel)] = 'newQuestion.question'\n    #question = 'ngModel'>\n    <span *ngIf = 'question.errors' class = 'red'> Question must be 10 Characters! </span> </p>\n\n    <p><button id = \"cancel\" (click) = 'cancel()'>Cancel</button><input type = \"submit\" value = \"Submit\" [disabled] = '!formData.valid'></p>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewQuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewQuestionComponent = (function () {
    function NewQuestionComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.newQuestion = {
            name: "",
            question: "",
            answers: []
        };
    }
    NewQuestionComponent.prototype.ngOnInit = function () {
    };
    NewQuestionComponent.prototype.addQuestion = function () {
        var _this = this;
        this._service.addQuestion(this.newQuestion)
            .then(function (question) {
            console.log("Successfull added question");
            _this._router.navigateByUrl('/');
        })
            .catch(function (err) { return console.log("There as an error adding the question"); });
    };
    NewQuestionComponent.prototype.cancel = function () {
        this._router.navigateByUrl('/');
    };
    return NewQuestionComponent;
}());
NewQuestionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-new-question',
        template: __webpack_require__("../../../../../src/app/new-question/new-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-question/new-question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NewQuestionComponent);

var _a, _b;
//# sourceMappingURL=new-question.component.js.map

/***/ }),

/***/ "../../../../../src/app/question-details/question-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question-details/question-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <p id = \"Home\"> <a [routerLink] = \"['']\"> Home | </a><a href = '/question/{{question._id}}/new_answer'> Answer this Question </a></p>\n  <h1> {{question.question}} </h1>\n  <div *ngFor = 'let answer of question.answers, let index = index'>\n    <p> {{index + 1}}). </p>\n    <p> {{answer.name}} wrote: <p>\n    <p> {{answer.answer}} <button id = \"like\" (click) = 'like(index, question._id)'>Like</button> {{answer.likes}} </p>\n    <p> {{answer.details}} </p>\n    <br>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/question-details/question-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionDetailsComponent = (function () {
    function QuestionDetailsComponent(_service, _router, _aroute) {
        var _this = this;
        this._service = _service;
        this._router = _router;
        this._aroute = _aroute;
        this.questions = [];
        this.answers = [];
        this._aroute.params.subscribe(function (params) {
            _this.id = params.id;
            console.log("This is the id the route is passing");
            console.log(_this.id);
        });
        this.getQuestions();
    }
    QuestionDetailsComponent.prototype.ngOnInit = function () {
    };
    QuestionDetailsComponent.prototype.getQuestions = function () {
        var _this = this;
        this._service.getQuestions()
            .then(function (questions) {
            _this.questions = questions;
            console.log(_this.questions);
            _this.getQuestion(_this.id);
        })
            .catch(function (err) { return console.log("issue with getting questions, inside detail comp."); });
    };
    QuestionDetailsComponent.prototype.getQuestion = function (id) {
        for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i]._id === id) {
                this.question = this.questions[i];
                console.log(this.question);
                // this.answers = this.question.answers;
            }
        }
    };
    QuestionDetailsComponent.prototype.like = function (answerIndex, questionId) {
        var _this = this;
        this.getQuestion(questionId);
        this.question.answers[answerIndex].likes = this.question.answers[answerIndex].likes + 1;
        this._service.updateQuestion(this.question)
            .then(function (question) {
            _this.getQuestions();
            _this._router.navigateByUrl('/question/' + _this.id);
        });
    };
    return QuestionDetailsComponent;
}());
QuestionDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-question-details',
        template: __webpack_require__("../../../../../src/app/question-details/question-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/question-details/question-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], QuestionDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=question-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/question-list/question-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question-list/question-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  \n  <p id = \"question\"> <a [routerLink] = \"['new_question']\"> Add a Question </a></p>\n  <!-- Add a Question -->\n  <table>\n    <tr>\n      <th>Question</th>\n      <th>Answers</th>\n      <th>Action</th>\n    </tr>\n    <tr *ngFor = 'let question of questions'>\n      <td> {{question.question}}</td>\n      <td> {{question.answers.length}}</td>\n      <td> <p id = \"actions\"> <a [routerLink] = \"['question',question._id]\"> Show </a> <a [routerLink] = \"['question',question._id,'new_answer']\"> Answer </a></p></td>\n      <!-- Modify These things. -->\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/question-list/question-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionListComponent = (function () {
    function QuestionListComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.getQuestions();
    }
    QuestionListComponent.prototype.ngOnInit = function () {
    };
    QuestionListComponent.prototype.getQuestions = function () {
        var _this = this;
        this._service.getQuestions()
            .then(function (questions) { return _this.questions = questions; })
            .catch(function (err) { return console.log("issue with getting questions"); });
    };
    return QuestionListComponent;
}());
QuestionListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-question-list',
        template: __webpack_require__("../../../../../src/app/question-list/question-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/question-list/question-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], QuestionListComponent);

var _a, _b;
//# sourceMappingURL=question-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/question.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionService = (function () {
    function QuestionService(_http) {
        this._http = _http;
        this.getQuestions();
    }
    QuestionService.prototype.getQuestions = function () {
        console.log("Got to service to get all Questions");
        return this._http.get("/questions").map(function (data) { return data.json(); }).toPromise();
    };
    QuestionService.prototype.addQuestion = function (question) {
        console.log("Got to service for adding question");
        return this._http.post("/questions", question).map(function (data) { return data.json(); }).toPromise();
    };
    QuestionService.prototype.updateQuestion = function (question) {
        console.log("Got the service, update");
        return this._http.put("/questions/" + question._id, question).map(function (data) { return data.json(); }).toPromise();
    };
    return QuestionService;
}());
QuestionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], QuestionService);

var _a;
//# sourceMappingURL=question.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map