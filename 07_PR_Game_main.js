window.addEventListener("load",init)
// DOM ELEMENT
let wordInput = document.querySelector("#word-input")
let currentWord = document.querySelector("#current-word")
let scoreDisplay = document.querySelector("#score")
let timeDisplay = document.querySelector("#time")
// console.log(time)
let message = document.querySelector("#message")
let score = 0;
let time = 0;
let currentLevel = 6;
time = currentLevel;

// console.log(message)
console.log(currentWord,wordInput)
// Array
let words = [
'Durvesh', 
'Anshuman', 
'SPidy', 
'Sudhir', 
'stubborn', 
'cocktail', 
'runaway', 
'joke', 
'developer', 
'establishment', 
'hero', 
'javascript', 
'nutrition', 
'revolver', 
'echo', 
'siblings', 
'investigate', 
'horrendous', 
'symptom', 
'laughter', 
'magic', 
'master', 
'space', 
'defintion' 
]

// Initialise Game
function init(){
showWords(words)
wordInput.addEventListener("input",startMatch)
setInterval(countdown,1000)
setInterval(checkStatus,50)
}
function showWords(words){
const randomIndex = Math.floor(Math.random()*words.length)
// console.log(words[randomIndex])
currentWord.innerHTML = words[randomIndex]
}
function matchWords(){
    if(wordInput.value == innerHTML.innerHTML){
        message.innerHTML = "Correct!!!!!"
        return true;
    }else{
        message.innerHTML=''
        return false;
    }
}
function startMatch(){
    console.log("test")
    if(matchWords()){
        showWords(words)
        wordInput.value = ''
        score++;
        time = currentLevel;
    }
    scoreDisplay.innerHTML

    
}
function countdown(){
    if(time>0){
        time--;

    }
    timeDisplay.innerHTML = time;
}
function checkStatus(){
    if(time == 0){
       message.innerHTML = "GAME OVER!!"
    }
}