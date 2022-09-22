

// let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '?']

// function numberGen() {
//     let result = '';
//     for (let i = 0; i < 99; i++) {
//         result += ((i+1) + '-' + symbols[i % symbols.length] + '<br>');
//     }
//     return result
// }

// console.log(numberGen.result);
let topText = document.getElementById('topText');
let helpText = document.getElementById('helpText');
let nextButton = document.getElementById('nextButton');
let goResetButton = document.getElementById('goResetButton');

function cardOne() {
    document.getElementById("topText").innerHTML = "I can read your mind";
    document.getElementById("nextButton").style.visibility = "hidden";
    document.getElementById("helpText").style.visibility = "hidden";
    document.getElementById("goResetButton").style.visibility = 'hidden';
    document.getElementById('goButton').style.visibility = 'visible';
    document.getElementById("goButton").onclick = function(){cardTwo()};
    document.getElementById('goButton').innerHTML = 'GO';
}

function cardTwo() {
    document.getElementById('topText').innerHTML = 'Pick a number from 01 - 99';
    document.getElementById('nextButton').style.visibility = 'visible';
    document.getElementById('nextButton').innerHTML = 'NEXT';
    document.getElementById('nextButton').onclick = function(){cardThree()}
    document.getElementById('helpText').style.visibility = 'visible';
    document.getElementById('helpText').innerHTML = 'when you have your number click next';
    document.getElementById('goButton').style.visibility = 'hidden';
    document.getElementById('goResetButton').style.visibility  = 'visible';
    document.getElementById('goResetButton').onclick = function(){cardOne()};
}

function cardThree() {
    document.getElementById('topText').innerHTML = 'Add both digits together to get a new number';
    document.getElementById('nextButton').style.visibility = 'visible';
    document.getElementById('nextButton').innerHTML = 'NEXT';
    document.getElementById('nextButton').onclick = function(){cardFour()}
    document.getElementById('helpText').style.visibility = 'visible';
    document.getElementById('helpText').innerHTML = 'Ex: 14 is 1 + 4 + 5 click next to proceed';
    document.getElementById('goButton').style.visibility = 'hidden';
    document.getElementById('goResetButton').style.visibility  = 'visible';
    document.getElementById('goResetButton').onclick = function(){cardOne()};
}

cardOne();
