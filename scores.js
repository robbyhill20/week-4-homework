var highScoresList = document.querySelector("#highScoresList")
var highScores= JSON.parse(localStorage.getItem('highScores')) ||[]

highScoresList.innerHTML=
highscores.map(score=>{
    return<li class="high-score">${score.name}- ${score.score}</li>
}).join('')