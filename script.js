const digit = document.querySelectorAll('.digit');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const opBtn = document.querySelectorAll('.operator');
const btn = document.querySelectorAll('.button');
const erase = document.querySelector('.erase')
const dot = document.querySelector('.dot');

const result1 = document.querySelector('.screen-result-one');
const result2 = document.querySelector('.screen-result-two');
const op = document.querySelector('.op');


//VARIABLES WHICH I WILL USE IN MATH FUNCTIONS
let num1 = '';
let num2 = '';
let operator;

//THIS VARIABLE IS BEING CHANGED DYNAMICALLY BASED ON WHICH NUMBER IS BEING ENTERED NUM1 OR NUM2
let isActive = true;

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
            return multiply(num1, num2).toFixed(2);
        case '/':
            return divide(num1, num2).toFixed(2);
    }
}

//EVENT LISTENER WHICH DETERMINES WHAT WILL BE NUM1
digit.forEach((num) => {
    num.addEventListener('click', () => {
        //IF TRUE NUM INPUT VALUE WILL BE NUM2
        if (isActive) {
            //RESETS PREVIOUS RESULT
            //MAKES NUM1 VARIABLE A RESULT1 TEXT CONT VALUE
            result1.textContent += num.textContent;
            result1.textContent = result1.textContent.replace(/^0+/, '')
            num1 = +result1.textContent;
        }
     })        
})

//EVENT LISTENER WHICH DETERMINES WHAT WILL BE NUM2
digit.forEach((num) => {
    num.addEventListener('click', () => {
        //IF FALSE NUM INPUT VALUE WILL BE NUM2
        if (!isActive) {
            //REMOVES RESULT1 OPERATOR AND PREVIOUS RESULT FROM SCREEN FOR CLEAN INPUT
            result1.textContent = '';
            op.textContent = '';
            //MAKES NUM2 VARIABLE A RESULT2 TEXT CONT
            result2.textContent += num.textContent;
            num2 = +result2.textContent;
        }
     })        
})

//DETERMINES WHAT MATH FUNCTION OPERATOR WILL BE
opBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        let tempOperator = operator;
        //CHECKS IF NUM1 IS DEFINED BEFORE APPLYING MATH OPERATOR
        if (num1 !== undefined) {
            operator = btn.textContent;
            op.textContent = operator;
            //IF FALSE NUM INPUT VALUE WILL BE NUM2
            isActive = false;
        }
        if (num2 !== '') {
            result2.textContent = '';
            result1.textContent = operate(num1, num2, tempOperator);
            // isActive = false;
            num1 = +result1.textContent;
            num2 = '';
        }
    })
})

dot.addEventListener('click', () => {
    if (isActive) {
        result1.textContent += '.';
        num1 += '.';
    } 
    if (!isActive) {
        result2.textContent += '.';
        num2 += '.';
    }
})

//SHOW RESULT AFTER EQUAL BUTTON IS BEING PRESSED
equal.addEventListener('click', () => {
    if(!isActive) {
        result2.textContent = '';
        result1.textContent = operate(num1, num2, operator);
        isActive = true;
        num1 = +result1.textContent;
        num2 = '';
    }
});

//FUNCTION AND EVENT LISTENER TO CLEAR SCREEN AFTER C IS CLICKED
clear.addEventListener('click', clearScreen);
erase.addEventListener('click', removeLastDigit);

function clearScreen() {
    isActive = true;
    result1.textContent = '';
    result2.textContent = '';
    op.textContent = '';
    num1 = '';
    num2 = '';
    operator = '';
}

function removeLastDigit() {
    if (isActive) {
        num1 = Math.floor(num1 / 10);
        result1.textContent = num1;
    } else if (!isActive) {
        num2 = Math.floor(num2 / 10);
        result2.textContent = num2;
    }
}