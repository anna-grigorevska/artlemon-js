let questions = [
  {
      title: "Что такое javascript?",
      answers: [
          {
              title: "Это скриптовый язык",
              is_correctly: true,
          },{
              title: "Это не язык язык",
              is_correctly: false,
          },{
              title: "Это  что-то еще",
              is_correctly: false,
          }
      ],
  },{
      title: "Какие утверждения верны",
      answers: [
          {
              title: "Значение переменной не изменно",
              is_correctly: false,
          },{
              title: "Значение переменной может изменяться",
              is_correctly: true,
          },{
              title: "Строки не изменны",
              is_correctly: true,
          },{
              title: "Строки изменяыемые",
              is_correctly: false,
          },{
              title: "Замыкание это возможность вызова функции",
              is_correctly: false,
          },{
              title: "Замыкание это возможность получения доступа к переменным из родительского лексического окружения",
              is_correctly: true,
          }
      ],
  },{
      title: "Что такое javascript?",
      answers: [
          {
              title: "Это скриптовый язык",
              is_correctly: true,
          },{
              title: "Это не язык язык",
              is_correctly: false,
          },{
              title: "Это  что-то еще",
              is_correctly: false,
          }
      ],
  },{
      title: "Какие утверждения верны",
      answers: [
          {
              title: "Значение переменной не изменно",
              is_correctly: false,
          },{
              title: "Значение переменной может изменяться",
              is_correctly: true,
          },{
              title: "Строки не изменны",
              is_correctly: true,
          },{
              title: "Строки изменяыемые",
              is_correctly: false,
          },{
              title: "Замыкание это возможность вызова функции",
              is_correctly: false,
          },{
              title: "Замыкание это возможность получения доступа к переменным из родительского лексического окружения",
              is_correctly: true,
          }
      ],
  },{
      title: "Что такое javascript?",
      answers: [
          {
              title: "Это скриптовый язык",
              is_correctly: true,
          },{
              title: "Это не язык язык",
              is_correctly: false,
          },{
              title: "Это  что-то еще",
              is_correctly: false,
          }
      ],
  },{
      title: "Какие утверждения верны",
      answers: [
          {
              title: "Значение переменной не изменно",
              is_correctly: false,
          },{
              title: "Значение переменной может изменяться",
              is_correctly: true,
          },{
              title: "Строки не изменны",
              is_correctly: true,
          },{
              title: "Строки изменяыемые",
              is_correctly: false,
          },{
              title: "Замыкание это возможность вызова функции",
              is_correctly: false,
          },{
              title: "Замыкание это возможность получения доступа к переменным из родительского лексического окружения",
              is_correctly: true,
          }
      ],
  }
];

this.curentQuestionsIndex = 0;
this.counterCorrectly = 0;


function renderQuestionForm(questionIndex){
  console.log(questionIndex);
}
function renderResult(counterCorrectly){
  console.log("Result:" + counterCorrectly);
}
function isCorrectlyAnswers(){
  return true;
}

Questions.prototype.init = function(){
  this.renderQuestionForm();
  document.getElementById("next").addEventListener("click", this. onclickQuestions.bind(this));
};
Questions.prototype.onclickQuestions = function(event){
  event.preventDefault();

  let form = event.target.closest("form");
  let formData = new FormData(form);

  if(this.isCorrectlyAnswers(formData)){
    this.counterCorrectly++;
  }

  if(this.questions.length > 1){
    this.questions.splice(  )
  }
}

Question.prototype.renderQuestionForm = function(){
  console.log(this.questions[0].title);
}

Question.prototype.renderResult = function (){
 console.log("Result:" + this.counterCorrectly);
};

Question.prototype.isCorrectlyAnswers = function (formData){
  return true
};
  

window.onload = function(){
  (new.Question).init();
}