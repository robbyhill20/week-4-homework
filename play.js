
var time = 45
var timerEl = document.getElementById("timer")

function updateTimer(){
    var timeInterval= setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (time > 1) {
          
          timerEl.textContent = time + ' seconds';
        
          time--;
        } else if (time === 1) {
          
          timerEl.textContent = time + ' second';
          time--;
        } else {
          
          timerEl.textContent = '';
        
          clearInterval(timeInterval);
          return window.location.assign("/final.html")
         
        
        }
      }, 1000);
    
}

var question= document.querySelector("#question")
var choices= Array.from(document.querySelectorAll(".answer-text"))
var scoreText= document.querySelector("#score")
var timer= document.querySelector("#timer")
var timerEmpty= document.querySelector("#timer-empty")

var currentQuestion= {}
var newAnswers= true 
var score= 0
var questionNumber= 0
var questionsAvail= [] 
var incorrect = 0

var questions=[
{
question: "What language is used to create the intial structure of a webpage?",
choice1: "CSS",
choice2: "HTML" ,
choice3: "JavaScript",
choice4: "jQuery",
answer: 2
},
{
question: "What language is used to add style to a webage?",
choice1: "CSS", 
choice2: "HTML", 
choice3: "JavaScript",
choice4: "jQuery",
answer: 1
},
{
question: "Which of these is not an HTML element?",
choice1: "H1", 
choice2: "title", 
choice3: "div",
choice4: "end",
answer: 4
    },

    {
question: "Which of the following is an array?",
choice1: "[abcdefghij]", 
choice2: "false", 
choice3: "backspace",
choice4: "1",
answer: 1
    },
]

var SCORE= 100
var MAX= 4

start=() =>{
questionNumber= 0
score= 0
questionsAvail = [...questions]
newQuestion()

}


newQuestion= () =>{
    if(questionsAvail.length === 0 || questionNumber > MAX){
        localStorage.setItem("recentScore", score)
        
        return window.location.assign("https://robbyhill20.github.io/Final-Page-/")
    }
    questionNumber++
    
    var questionIndex = Math.floor(Math.random() *questionsAvail.length)
    currentQuestion = questionsAvail[questionIndex]
    question.innerText=currentQuestion.question

    choices.forEach(choice =>{
        var number = choice.dataset["number"]
        choice.innerText= currentQuestion['choice' + number]
    })

    questionsAvail.splice(questionIndex, 1)
    newAnswers= true
    console.log(currentQuestion)
}
choices.forEach(choice=>{
    choice.addEventListener("click", e=>{
        if(!newAnswers) return
        newAnswers= false
        var selectedChoice = e.target
        var selectedAnswer= selectedChoice.dataset['number']

        let classToApply= selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        if(classToApply==='correct'){
            adjustScore(SCORE)}
            else(time = time - 10)
        
        selectedChoice.parentElement.classList.add(classToApply)
        setTimeout(()=>{
            selectedChoice.parentElement.classList.remove(classToApply)
            newQuestion()
           
        },1000)
    })
})

adjustScore =num =>{
    score +=num
    scoreText.innerText=score
    console.log(choices)
}

start()
updateTimer()
