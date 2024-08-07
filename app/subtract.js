const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

const currentScore = document.getElementById("current-score");
const timerDisplay = document.getElementById("timer");

let answer = 0;
let score = 0;
let timeLeft = 60;
let timer;

/*
const wAudio = document.getElementById("wrong");
const cAudio = document.getElementById("correct");
*/

function randNum(num)
{
    return Math.floor(Math.random() * num);
};

function generateEqu()
{
    /* ---- real answer ---- */
    let rnum1 = randNum(12);
    let rnum2 = randNum(12);
    answer = rnum1 - rnum2;

    /* ---- wrong answers generator ---- */
    let fakeAns1;
    let fakeAns2;

    do
    {
        fakeAns1 = randNum(12);
    }
    while(fakeAns1 === answer);

    do
    {
        fakeAns2 = -randNum(12);
    }
    while(fakeAns2 === answer || fakeAns2 === fakeAns1)

    /* ---- setting the options in a random order ---- */
    let allAns = [answer, fakeAns1, fakeAns2];
    let switchAns = [];

    num1.innerHTML = rnum1;
    num2.innerHTML = rnum2;

    for(i = allAns.length; i--;)
    {
        switchAns.push(allAns.splice(randNum(i + 1), 1)[0]);
    }

    option1.innerHTML = switchAns[0];
    option2.innerHTML = switchAns[1];
    option3.innerHTML = switchAns[2];
};

function updateScore()
{
    currentScore.textContent = score;
};

function updateTimer()
{
    timerDisplay.textContent = timeLeft;
};

function updateTime()
{
    timeLeft--;
    document.getElementById("timer").innerHTML = timeLeft;
    if(timeLeft === 0)
    {
        alert("Time Is Up! Your Final Score Is " + score + ".");
        location.reload();
    }
};

function startGame()
{
    score = 0;
    timeLeft = 60;
    generateEqu();
    updateScore();
    updateTimer();

    clearInterval(timer);
    timer = setInterval(function()
    {
        timeLeft--;
        updateTimer();

        if(timeLeft === 0)
        {
            clearInterval(timer);

            window.scrollTo(0, 0);

            let finalScore = score;
            alert("Time Is Up! Your Final Score Is " + finalScore + ".");

            location.reload();
        }
    }, 1000);
};

generateEqu();
startGame();

option1.addEventListener("click", function()
{
    if(option1.innerHTML == answer)
    {
        score++;
        generateEqu();
        updateScore();
        var audio = new Audio("audios/correct.mp3");
        audio.play();
    }
    else
    {
        var audio = new Audio("audios/wrong.mp3");
        audio.play();
    }
});

option2.addEventListener("click", function()
{
    if(option2.innerHTML == answer)
    {
        score++;
        generateEqu();
        updateScore();
        var audio = new Audio("audios/correct.mp3");
        audio.play();
    }
    else
    {
        var audio = new Audio("audios/wrong.mp3");
        audio.play();
    }
});

option3.addEventListener("click", function()
{
    if(option3.innerHTML == answer)
    {
        score++;
        generateEqu();
        updateScore();
        var audio = new Audio("audios/correct.mp3");
        audio.play();
    }
    else
    {
        var audio = new Audio("audios/wrong.mp3");
        audio.play();
    }
});