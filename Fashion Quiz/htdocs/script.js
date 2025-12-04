var shcScore = 0;
var lwScore = 0;
var osScore = 0;
var ahssScore = 0;

var questionCount = 0;

var result = document.getElementById("result");

var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1"); 
var q1a2 = document.getElementById("q1a2"); 
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1"); 
var q2a2 = document.getElementById("q2a2"); 
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1"); 
var q3a2 = document.getElementById("q3a2"); 
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1"); 
var q4a2 = document.getElementById("q4a2"); 
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1"); 
var q5a2 = document.getElementById("q5a2"); 
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");


q1a1.addEventListener("click", shc);
q1a2.addEventListener("click", lw);
q1a3.addEventListener("click", os);
q1a4.addEventListener("click", ahss);

q2a1.addEventListener("click", lw);
q2a2.addEventListener("click", shc);
q2a3.addEventListener("click", ahss);
q2a4.addEventListener("click", os);

q3a1.addEventListener("click", ahss);
q3a2.addEventListener("click", lw);
q3a3.addEventListener("click", shc);
q3a4.addEventListener("click", os);

q4a1.addEventListener("click", os);
q4a2.addEventListener("click", lw);
q4a3.addEventListener("click", ahss);
q4a4.addEventListener("click", shc);

q5a1.addEventListener("click", ahss);
q5a2.addEventListener("click", os);
q5a3.addEventListener("click", lw);
q5a4.addEventListener("click", shc);

restart.addEventListener("click", clear);

function shc() {
    shcScore += 1;
    questionCount += 1;

    console.log("questionCount = " + questionCount + "shcScore = " + shcScore);

    if (questionCount == 5) {
    console.log("The quiz is done!")
    updateResult();
    }
}

function lw() {
    lwScore += 1;
    questionCount += 1;

    console.log("questionCount = " + questionCount + "lwScore = " + lwScore);

    if (questionCount == 5) {
    console.log("The quiz is done!")
    updateResult();
    }
}

function os() {
    osScore += 1;
    questionCount += 1;

    console.log("questionCount = " + questionCount + "osScore = " + osScore);

    if (questionCount == 5) {
    console.log("The quiz is done!")
    updateResult();
    }
}

function ahss() {
    ahssScore += 1;
    questionCount += 1;

    console.log("questionCount = " + questionCount + "ahssScore = " + ahssScore);

    if (questionCount == 5) {
    console.log("The quiz is done!")
    updateResult();
    }
}

// >= # needs to be changed by determined fashion categories

function updateResult () {
    if (shcScore >= 2) {
        result.innerHTML = "You have a shabby chic style!";
        console.log("You have a shappy chic style!");
    } else if (lwScore >= 2) {
        result.innerHTML = "You have a loungewear style!";
        console.log("You have a loungewear style!");
    }else if (osScore >= 2) {
        result.innerHTML = "You have an office siren style!";
        console.log("You have an office siren style!");
    }else if (ahssScore >= 2) {
        result.innerHTML = "You have an American high street style!";
        console.log("You have an American high street style!");
    }
}

function clear() {
    result.innerHTML = "Your result is...";
    shcScore = 0;
    lwScore = 0;
    osScore = 0;
    ahssScore = 0;
    questionCount = 0;
}


