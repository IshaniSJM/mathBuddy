const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
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
    let rnum1;
    let rnum2;

    do
    {
        rnum1 = randNum(12);
        rnum2 = randNum(12);
    }
    while((rnum1 === 0 || rnum2 === 0) || (rnum1 === 0 && rnum2 === 0))

    answer = rnum1 / rnum2;

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
        fakeAns2 = randNum(12);
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

generateEqu();

option1.addEventListener("click", function()
{
    if(option1.innerHTML == answer)
    {
        generateEqu();
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
        generateEqu();
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
        generateEqu();
        var audio = new Audio("audios/correct.mp3");
        audio.play();
    }
    else
    {
        var audio = new Audio("audios/wrong.mp3");
        audio.play();
    }
});