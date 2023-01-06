let currentSelectedNum = '';
let currentCalculatedValue = '';
let num1, num2, operator;
let displayBox = document.getElementById('resultVal');

const digitButtons = document.querySelectorAll('.bttn.input');
const operatorButtons = document.querySelectorAll('.bttn.operator');
const dotButton = document.getElementById('dotBttn');

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
    currentCalculatedValue = Math.round(result * 100000000) / 100000000;
    displayBox.innerHTML = currentCalculatedValue;
}

function addDigit(num) {
    currentSelectedNum += num;
    displayBox.innerHTML = currentSelectedNum;
}

function addOperator(op) {
    if (operator) {
        num2 = currentSelectedNum;
        operate(operator, +num1, +num2);
    }
    operator = op;
    if (currentCalculatedValue) {
        num1 = currentCalculatedValue;
    } else {
        num1 = currentSelectedNum;
    }
    currentSelectedNum = '';
}

function evaluate() {
    if (!num1) { return; }
    num2 = currentSelectedNum;
    operate(operator, +num1, +num2);
}

// add eventListeners to the digits to display them when they are clicked and handle functionality
digitButtons.forEach(digitButton => {
    digitButton.addEventListener(
        'click', (e) => {
            addDigit(digitButton.value);
})});

// add eventListeners to the operators
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', (e) => {
        dotButton.disabled = false;
        addOperator(operatorButton.value);
    })
})

// Disable the . button when it has been used once
dotButton.addEventListener('click', (e) => {
    dotButton.disabled = true;
})

// EQUALS
document.getElementById('equalsBttn').addEventListener('click', (e) => {
    dotButton.disabled = false;
    evaluate();
})

// clear
document.getElementById('clearBttn').addEventListener('click', (e) => {
    dotButton.disabled = false;
    currentSelectedNum = '';
    num1 = '';
    num2 = '';
    operator = '';
    displayValue = '';
    displayBox.innerHTML = displayValue;
    currentCalculatedValue = '';
})

// Keyboard support
document.addEventListener('keydown', (e) => {
    // Backspace support
    if (e.key == 'Backspace') {
        let copyVal = currentSelectedNum;
        currentSelectedNum = copyVal.slice(0, -1);
        displayBox.innerHTML = currentSelectedNum;
    }
    // Digits support
    let key = parseInt(e.key);
    if (key) {
        addDigit(key);
    }

    // Operators support
    if (e.key === '/') {
        addOperator('divide');
    }    
    if (e.key === '-') {
        addOperator('subtract');
    }    
    if (e.key === '+') {
        addOperator('add');
    }
    if (e.key === '*') {
        addOperator('multiply');
    }

    // Equals support
    if (e.key === '=') {
        evaluate();
    }
})