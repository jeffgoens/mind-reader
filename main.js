

let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '?']

function numberGen() {
    let result = '';
    for (let i = 0; i < 99; i++) {
        result += ((i+1) + '-' + symbols[i % symbols.length] + '<br>');
    }
    return result
}

console.log(numberGen.result);
