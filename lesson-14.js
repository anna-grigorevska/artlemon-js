function Question(){
    this.questions = [
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
            title: "Какие высказывания верны",
            answers: [
                {
                    title: "Функция выполняется только один раз",
                    is_correctly: false,
                },{
                    title: "Функция заменяет циклы",
                    is_correctly: false,
                },{
                    title: "Функция может вызвать саму себя",
                    is_correctly: true,
                }
            ],
        },{
            title: "Какие утверждения верны4",
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
            title: "Что такое javascript?5",
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
            title: "Какие утверждения верны6",
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

    this.counterCorrectly = 0;
};

Question.prototype.init = function(){
    this.renderQuestionForm();
    document.getElementById("next").addEventListener("click", this.onclickQuestion.bind(this));
};

Question.prototype.onclickQuestion = function(event){
    event.preventDefault();

    let form = event.target.closest("form");
    let formData = new FormData(form);

    if(this.isCorrectlyAnswers(formData)){
        this.counterCorrectly++;
    }

    if(this.questions.length > 1){
        this.questions.splice(0, 1);
        this.renderQuestionForm();
    }else{
        this.renderResult();
    }
};

Question.prototype.renderQuestionForm = function (){

    document.getElementById("title-question").innerHTML = this.questions[0].title;

    let answers = document.getElementById("answers");
    answers.innerHTML = "";

    for(let i = 0; i < this.questions[0].answers.length; i++){
        let checkboxAnswer = document.createElement("INPUT");
        checkboxAnswer.type = "checkbox";
        checkboxAnswer.id = "answer-" + i;
        checkboxAnswer.name = "answer-" + i;

        let labelAnswer = document.createElement("LABEL");
        labelAnswer.innerHTML = this.questions[0].answers[i].title;
        labelAnswer.setAttribute("for", "answer-" + i);

        let div = document.createElement("DIV");
        div.appendChild(checkboxAnswer);
        div.appendChild(labelAnswer);

        answers.appendChild(div);
    }
};

Question.prototype.renderResult = function (){
    document.body.innerHTML = "Ваш результат: " + this.counterCorrectly;
};

Question.prototype.isCorrectlyAnswers = function (formData){
    let answers = this.questions[0].answers;
    for(let i = 0; i < answers.length; i++){
        let isAnswer = !!formData.get("answer-" + i);
        if(isAnswer !== answers[i].is_correctly){
            return false;
        }
    }

    return true;
};

window.addEventListener("DOMContentLoaded", function(){
    (new Question).init();
});
