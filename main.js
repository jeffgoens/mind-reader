

let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '+'];
let playerSymbol = '';

// overall function that randomizes the number, assigns symbol and captures the players symbol

let generateNumbers = function() {
    let result = '';

    // randomizes the symbols and returns all the numbers that are divisible by 9 and it's associated symbol

    playerSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    for (let i = 0; i <= 99; i++) {
        if (i % 9 === 0) {
        result += i + ' - ' + playerSymbol + '<br>';

    // generates the entire list of numbers and their symbols   

        } else {
            let listSymbol = symbols[Math.floor(Math.random() * symbols.length)];
            result += i + ' - ' + listSymbol + '<br>';
        }
    }

    return result
}

// functions for each card that updates the targeted element

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
    document.getElementById('topText').innerHTML = generateNumbers();
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
    document.getElementById('topText').innerText = playerSymbol;
    document.getElementById('nextButton').style.visibility = 'hidden';
    document.getElementById('nextButton').innerText = 'REVEAL';
    document.getElementById('helpText').style.visibility = 'visible';
    document.getElementById('helpText').innerText = 'Your symbol is:' + '\n'+ playerSymbol;
    document.getElementById('goButton').style.visibility = 'hidden';
    document.getElementById('goResetButton').style.visibility  = 'visible';
    document.getElementById('goResetButton').onclick = function(){cardOne()};
}

// invokes first card function

cardOne();
