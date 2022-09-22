

let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '+'];

function generateSymbols() {
    let result = '';
    for (let i = 0; i < 99; i++) {
        result += ((i+1) + ' - ' + symbols[i % symbols.length] + '<br>');
        
    }
    console.log(result);
    return result
}




function cardOne() {
    document.getElementById("topText").innerText = "I can read your mind";
    document.getElementById("nextButton").style.visibility = "hidden";
    document.getElementById("helpText").style.visibility = "hidden";
    document.getElementById("goResetButton").style.visibility = 'hidden';
    document.getElementById('goButton').style.visibility = 'visible';
    document.getElementById("goButton").onclick = function(){cardTwo()};
    document.getElementById('goButton').innerText = 'GO';
}

function cardTwo() {
    document.getElementById('topText').innerText = 'Pick a number from 01 - 99';
    document.getElementById('nextButton').style.visibility = 'visible';
    document.getElementById('nextButton').innerText = 'NEXT';
    document.getElementById('nextButton').onclick = function(){cardThree()}
    document.getElementById('helpText').style.visibility = 'visible';
    document.getElementById('helpText').innerText = 'when you have your number click next';
    document.getElementById('goButton').style.visibility = 'hidden';
    document.getElementById('goResetButton').style.visibility  = 'visible';
    document.getElementById('goResetButton').onclick = function(){cardOne()};
}

function cardThree() {
    document.getElementById('topText').innerText = 'Add both digits together to get a new number';
    document.getElementById('nextButton').style.visibility = 'visible';
    document.getElementById('nextButton').innerText = 'NEXT';
    document.getElementById('nextButton').onclick = function(){cardFour()}
    document.getElementById('helpText').style.visibility = 'visible';
    document.getElementById('helpText').innerText = 'Ex: 14 is 1 + 4 + 5 click next to proceed';
    document.getElementById('goButton').style.visibility = 'hidden';
    document.getElementById('goResetButton').style.visibility  = 'visible';
    document.getElementById('goResetButton').onclick = function(){cardOne()};
}

function cardFour() {
    document.getElementById('topText').innerText = 'Subtract your new number from the original number';
    document.getElementById('nextButton').style.visibility = 'visible';
    document.getElementById('nextButton').innerText = 'NEXT';
    document.getElementById('nextButton').onclick = function(){cardFive()}
    document.getElementById('helpText').style.visibility = 'visible';
    document.getElementById('helpText').innerText = 'Ex: 14 - 5 = 9 click next to proceed';
    document.getElementById('goButton').style.visibility = 'hidden';
    document.getElementById('goResetButton').style.visibility  = 'visible';
    document.getElementById('goResetButton').onclick = function(){cardOne()};
}

function cardFive() {
    document.getElementById('topText').innerHTML = generateSymbols();
    document.getElementById('nextButton').style.visibility = 'visible';
    document.getElementById('nextButton').innerText = 'REVEAL';
    document.getElementById('nextButton').onclick = function(){cardSix()}
    document.getElementById('helpText').style.visibility = 'visible';
    document.getElementById('helpText').innerText = 'Find your new number. Match the symbol beside the number';
    document.getElementById('goButton').style.visibility = 'hidden';
    document.getElementById('goResetButton').style.visibility  = 'visible';
    document.getElementById('goResetButton').onclick = function(){cardOne()};
}

function cardSix() {
    document.getElementById('topText').innerText = 'Returned symbol goes here';
    document.getElementById('nextButton').style.visibility = 'hidden';
    document.getElementById('nextButton').innerText = 'REVEAL';
    document.getElementById('helpText').style.visibility = 'visible';
    document.getElementById('helpText').innerText = 'Your symbol is:' + "returned symbol";
    document.getElementById('goButton').style.visibility = 'hidden';
    document.getElementById('goResetButton').style.visibility  = 'visible';
    document.getElementById('goResetButton').onclick = function(){cardOne()};
}

cardOne();
