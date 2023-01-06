let currentSelectedNum = '';
let currentCalculatedValue = '';
let num1, num2, operator;
let displayBox = document.getElementById('resultVal');

// Get all UI elements
const digitButtons = document.querySelectorAll('.bttn.input');
const operatorButtons = document.querySelectorAll('.bttn.operator');
const dotButton = document.getElementById('dotBttn');

// Math functions
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

// Operate logic
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

// Adds digit when clicked or key pressed
function addDigit(num) {
    currentSelectedNum += num;
    displayBox.innerHTML = currentSelectedNum;
}

// Adds operator when clicked or key pressed
function addOperator(op) {
    dotButton.disabled = false;
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

// Evaluate functionality when equals clicked or pressed
function evaluate() {
    dotButton.disabled = false;
    if (!num1) { return; }
    num2 = currentSelectedNum;
    operate(operator, +num1, +num2);
}

// Clears all previous entries
function clear() {
    currentSelectedNum = '';
    num1 = '';
    num2 = '';
    operator = '';
    displayValue = '';
    displayBox.innerHTML = displayValue;
    currentCalculatedValue = '';
}

// Add eventlisteners for all digit buttons
digitButtons.forEach(digitButton => {
    digitButton.addEventListener(
        'click', (e) => {
            addDigit(digitButton.value);
})});

// Add eventlisteners for all operator buttons
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', (e) => {
        addOperator(operatorButton.value);
    })
})

// Disable the . button when it has been used once
dotButton.addEventListener('click', (e) => {
    dotButton.disabled = true;
})

// Add eventlistener for the equals button
document.getElementById('equalsBttn').addEventListener('click', (e) => {
    evaluate();
})

// Add eventlistener for the clear button
document.getElementById('clearBttn').addEventListener('click', (e) => {
    dotButton.disabled = false;
    clear();
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

    // . support
    if (e.key === '.') {
        if (!dotButton.disabled) {
            dotButton.disabled = true;
            addDigit('.');
        }
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