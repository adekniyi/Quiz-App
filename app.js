var result = document.querySelector('span');
var submit = document.querySelector('button');
var questionOne = document.querySelectorAll('#questionOne');
var questionTwo = document.querySelectorAll('#questionTwo');
var questionThree = document.querySelectorAll('#questionThree');
var questionFour = document.querySelectorAll('#questionFour');
var questionFive = document.querySelectorAll('#questionFive');
var questionSix = document.querySelectorAll('#questionSix');
var questionSeven = document.querySelectorAll('#questionSeven');
var questionEight = document.querySelectorAll('#questionEight');
var questionNine = document.querySelectorAll('#questionNine');
var questionTen = document.querySelectorAll('#questionTen');
var totalScore = 0;
var isCheckedOne = false;
var isCheckedTwo = false;
var isCheckedThree = false;
var isCheckedFour = false;
var isCheckedFive = false;
var isCheckedSix = false;
var isCheckedSeven = false;
var isCheckedEight = false;
var isCheckedNine = false;
var isCheckedTen = false;
for (const answerOne of questionOne) {
    answerOne.addEventListener('click', function() {
    if(!isCheckedOne){
        if(this.value == "A. Buhari"){
            console.log("correct")
            this.classList.add('won')
            totalScore = 1;
            isCheckedOne = true;
        }
        else{
            console.log("You're wrong");
            this.classList.add('fail')
            isCheckedOne = true;
        }
    }
      
  })}
  for (const answerTwo of questionTwo) {
    answerTwo.addEventListener('click', function() {
    if(!isCheckedTwo){
        if(this.value == "D. Sawoolu"){
            console.log("correct");
            this.classList.add('won')
            isCheckedTwo = true;
            totalScore++
        }
        else{
            console.log("You're wrong");
            this.classList.add('fail')
            isCheckedTwo = true;
        }
    }
  })}
  for (const answerThree of questionThree) {
    answerThree.addEventListener('click', function() {
    if(!isCheckedThree){
        if(this.value == "A. Hydrogen"){
            console.log("correct");
            this.classList.add('won')
            isCheckedThree = true;
            totalScore++
        }
        else{
            console.log("You're wrong");
            this.classList.add('fail')
            isCheckedThree = true;
        }
    }
  })}
  for (const answerFour of questionFour) {
    answerFour.addEventListener('click', function() {
    if(!isCheckedFour){
        if(this.value == "B. Nigeria"){
            console.log("correct");
            this.classList.add('won')
            isCheckedFour = true;
            totalScore++
        }
        else{
            console.log("You're wrong");
            this.classList.add('fail')
            isCheckedFour = true;
        }
    }
  })}
  for (const answerFive of questionFive) {
    answerFive.addEventListener('click', function() {
    if(!isCheckedFive){
        if(this.value == "C. Algeria"){
            console.log("correct");
            this.classList.add('won')
            isCheckedFive = true;
            totalScore++
        }
        else{
            console.log("You're wrong");
            this.classList.add('fail')
            isCheckedFive = true;
        }
    }
  })}
  for (const answerSix of questionSix) {
    answerSix.addEventListener('click', function() {
    if(!isCheckedSix){
        if(this.value == "D. Falcao"){
            console.log("correct");
            this.classList.add('won')
            isCheckedSix = true;
            totalScore++
        }
        else{
            console.log("You're wrong");
            this.classList.add('fail')
            isCheckedSix = true;
        }
    }
  })}
  for (const answerSeven of questionSeven) {
    answerSeven.addEventListener('click', function() {
    if(!isCheckedSeven){
        if(this.value == "B. Diffusion"){
            console.log("correct");
            this.classList.add('won')
            isCheckedSeven = true;
            totalScore++
        }
        else{
            console.log("You're wrong");
            this.classList.add('fail')
            isCheckedSeven = true;
        }
    }
  })}
  for (const answerEight of questionEight) {
    answerEight.addEventListener('click', function() {
    if(!isCheckedEight){
        if(this.value == "A. Movement"){
            console.log("correct");
            this.classList.add('won')
            isCheckedEight = true;
            totalScore++
        }
        else{
            console.log("You're wrong");
            this.classList.add('fail')
            isCheckedEight = true;
        }
    }
  })}
  for (const answerNine of questionNine) {
    answerNine.addEventListener('click', function() {
    if(!isCheckedNine){
        if(this.value == "D. Goods and Services"){
            console.log("correct");
            this.classList.add('won')
            isCheckedNine = true;
            totalScore++
        }
        else{
            console.log("You're wrong");
            this.classList.add('fail')
            isCheckedNine = true;
        }
    }
  })}
  for (const answerTen of questionTen) {
    answerTen.addEventListener('click', function() {
    if(!isCheckedTen){
        if(this.value == "C. Brymo"){
            console.log("correct");
            this.classList.add('won')
            isCheckedTen = true;
            totalScore++
        }
        else{
            console.log("You're wrong");
            this.classList.add('fail')
            isCheckedTen = true;
        }
    }
  })}
  submit.addEventListener('click', function(){
    console.log(totalScore);
    result.innerHTML = totalScore;
  })
  
  console.log(totalScore)