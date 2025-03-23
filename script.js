const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const digit = document.querySelectorAll('.digit');

const plus = document.querySelector('.add');
const minus = document.querySelector('.minus');
const times = document.querySelector('.times');
const divide = document.querySelector('.divide');
const equal = document.querySelector('.equal');
const del = document.querySelector('.delete');

const button = document.querySelectorAll('.button');
const result = document.querySelector('.result');

//BASIC MATH FUNCTIONS
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divideNum(a, b) {
    return a / b;
}

let a;
let b;
let operator;
let screenResult = '';

//FUNCTION THAT RETURNS MATH FUNCTION BASED ON OPERATOR INPUT
function operate(a, b, operator) {
    if (operator === '+') {
        return add(a, b);
    };
    if (operator === '-') {
        return subtract(a, b);
    };
    if (operator === '*') {
        return multiply(a, b);
    };
    if (operator === '/') {
        return divide(a, b);
    }
};

//FUNCTION THAT ADDS VALUE TO DISPLAY WHEN U PRESS A BUTTON
// function addElementsToScreen(el) {
//     if (el.classList === 'delete') {
//         result.textContent === '';
//     }
// }


digit.forEach((num) => {
    num.addEventListener('click', () => {
        if (screenResult.length <= 10) {
            screenResult = result.textContent += num.innerText;
        }
    })
});


