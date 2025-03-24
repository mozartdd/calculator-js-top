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
const resultTwo = document.querySelector('.result-two');

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

let a = '';
let b = '';
let operator = '+';


//FUNCTION THAT RETURNS MATH FUNCTION BASED ON OPERATOR INPUT
function operate(a, b, operator) {
    if (operator === '+') {
        return console.log(add(a, b));
        ;
    };
    if (operator === '-') {
        return console.log(subtract(a, b));
        ;
    };
    if (operator === '*') {
        return console.log(multiply(a, b));
        ;
    };
    if (operator === '/') {
        return console.log(divideNum(a, b));
        ;
    }
};


equal.addEventListener('click', () => {
    operate(a, b, operator);
});

getFirstInteger()
getSecondInteger()

//I NEED A FUNCTION WHICH RETURNS THE INT FROM BUTTON INPUT //

function getFirstInteger() {
    digit.forEach((num) => {
        num.addEventListener('click', () => {
            if (a.length <= 0 && num.innerText === '0') {
                result.textContent += '';
                a = parseInt(result.textContent);
                return a;
            } else if (a.length <= 10) {
                result.textContent += num.innerText;
                a = parseInt(result.textContent);
                return a;
            }
        });
    });
};

function getSecondInteger() {
    digit.forEach((num) => {
        num.addEventListener('click', () => {
            if (b.length <= 0 && num.innerText === '0') {
                resultTwo.textContent += '';
                b = parseInt(resultTwo.textContent);
                return b;
            } else if (b.length <= 10) {
                resultTwo.textContent += num.innerText;
                b = parseInt(resultTwo.textContent);
                return b;
            }
        });
    });
}
//CLEARS RESULT SCREEN
del.addEventListener('click', () => {
    result.textContent = '';
    a = '';
    resultTwo.textContent = '';
    b = '';
});


