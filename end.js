var username= document.querySelector("#username")
var saveScore= document.querySelector("#saveScore")
var finalScore= document.querySelector("#finalScore")
var mostRecent= localStorage.getItem("recentScore")
console.log(mostRecent)
var highScores= JSON.parse(localStorage.getItem("highScores")) ||[]

var maxScores = 5

finalScore.innerText= mostRecent
username.addEventListener('keyup',()=>{
    saveScore.disabled=!username.value
})

saveHighscore= e => {
    e.preventDefault()
    
    var score={
        score:mostRecent,
        name: username.value
    }
    highScores.push(score)
    highScores.splice(5)
    
    localStorage.setItem("highScores", JSON.stringify(highScores))
    window.location.assign('/')
    
}