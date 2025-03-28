const digit = document.querySelectorAll('.digit');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');

const result1 = document.querySelector('.screen-result-one');
const result2 = document.querySelector('.screen-result-two');


//VARIABLES WHICH I WILL USE IN MATH FUNCTIONS
let num1 = 0;
let num2 = 4;
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
        if (result1.textContent < 999999999) {
            result1.textContent += num.textContent;
            result1.textContent = result1.textContent.replace(/^0+/, '')
            num1 = +result1.textContent;
            console.log(num1);
        }
     })        
})
// digit.forEach((num) => {
//     num.addEventListener('click', () => {
//         if (result2.textContent < 999999999) {
//             result2.textContent += num.textContent;
//             num2 = +result2.textContent;
//         }
//      })        
// })

//TEST
equal.addEventListener('click', () => {
    console.log(operate(num1, num2, '+'));
});

//FUNCTION AND EVENT LISTENER TO CLEAR SCREEN AFTER C IS CLICKED
clear.addEventListener('click', clearScreen);

function clearScreen() {
    result1.textContent = '';
    result2.textContent = '';
    num1 = 0;
    // num2 = 0;
}