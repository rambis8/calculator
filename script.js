function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    let result = 0;
    switch (operator) {
        case 'add': result = add(num1, num2); break;
        case 'subtract': result = subtract(num1, num2); break;
        case 'multiply': result = multiply(num1, num2); break;
        case 'divide': result = divide(num1, num2); break;
    }
    currentCalculatedValue = result;
    displayBox.innerHTML = result;
}

let currentSelectedNum = '';
let currentCalculatedValue = '';
let num1;
let num2;
let operator;
let displayBox = document.getElementById('resultVal');

// selects all digit buttons
let digits = document.querySelectorAll('#digits button');
// select all operator buttosn
let operators = document.querySelectorAll('#operators button');

// add eventListeners to the digits to display them when they are clicked
digits.forEach(digitButton => {
    digitButton.addEventListener(
        'click', function() {
            currentSelectedNum += digitButton.value;
            displayBox.innerHTML = currentSelectedNum;
            console.log('click: ' + digitButton.value);
})});

// add eventListeners to the operators
operators.forEach(operatorButton => {
    operatorButton.addEventListener('click', function() {
        operator = operatorButton.value;
        num1 = currentSelectedNum;
        currentSelectedNum = '';
        console.log('operator clicked: ' + operator);
    })
})


// EQUALS
document.querySelector('#equals button').addEventListener('click', function() {
    num2 = currentSelectedNum;
    console.log('num1:' + num1);
    console.log('num2:' + num2);
    console.log('operator:' + operator);
    // call operate function with operator, num1 and num2
    operate(operator, +num1, +num2);
})

// clear
document.getElementById('clearBtn').addEventListener('click', function() {
    currentSelectedNum = '';
    num1 = '';
    num2 = '';
    operator = '';
    displayValue = '';
    displayBox.innerHTML = displayValue;
    currentCalculatedValue = '';
})