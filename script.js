const digit = document.querySelectorAll('.digit');
const result1 = document.querySelector('.screen');
const equal = document.querySelector('.equal');

//VARIABLES WHICH I WILL USE LATER
let num1;
let num2 = 12;
let operator = '/';

//BASIC FUNCTIONS FOR MATH OPERATIONS
function addition(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

//FUNCTION THAT RETURNS ONE OF MATH FUNCTIONS BASED OF OPERATOR INPUT
function operate(num1, num2, operator) {
    switch(operator) {
        case '+':
            return addition(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return Math.round(divide(num1, num2));
    }
}

//WHICH PARSES TROUGH INT VARIABLES AND ADDS SCREEN VALUE TO NUM1 VAR
digit.forEach((num) => {
    num.addEventListener('click', () => {
        result1.textContent += num.textContent;
        num1 = +result1.textContent;
     })        
})

//TEST
equal.addEventListener('click', () => {
    console.log(operate(num1, 5, '+'));
})


// returnNumOne()