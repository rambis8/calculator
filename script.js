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
    console.log('in operate: ')
    console.log('operator: ' + operator)
    console.log('num1: ' + num1)
    console.log('num2: ' + num2)
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
let digits = document.querySelectorAll('.bttn.input');
// select all operator buttons
let operators = document.querySelectorAll('.bttn.operator');

// add eventListeners to the digits to display them when they are clicked and handle functionality
digits.forEach(digitButton => {
    digitButton.addEventListener(
        'click', function() {
            console.log('button clicked')
            console.log('clicked: ' + digitButton.value);
            currentSelectedNum += digitButton.value;
            displayBox.innerHTML = currentSelectedNum;
})});

// add eventListeners to the operators
operators.forEach(operatorButton => {
    operatorButton.addEventListener('click', function() {
        console.log('clicked operator: ' + operatorButton.value);
        operator = operatorButton.value;
        if (currentCalculatedValue) {
            num1 = currentCalculatedValue;
        } else {
            num1 = currentSelectedNum;
        }
        currentSelectedNum = '';
    })
})

// EQUALS
document.getElementById('equalsBttn').addEventListener('click', function() {
    num2 = currentSelectedNum;
    operate(operator, +num1, +num2);
})

// clear
document.getElementById('clearBttn').addEventListener('click', function() {
    currentSelectedNum = '';
    num1 = '';
    num2 = '';
    operator = '';
    displayValue = '';
    displayBox.innerHTML = displayValue;
    currentCalculatedValue = '';
})