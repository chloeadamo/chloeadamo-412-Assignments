// Function that parses a string and evaluates the expression 
const evaluate = (str) => {
    const left = str[0]
    const operand = str[1]
    const right = str[2]
    switch(operand){ // This switches the operation sign depending on what it is and parses the numbers left and right 
        case '+':
            return (expression) => parseInt(left) + parseInt(right);
        case '*':
            return (expression) => parseInt(left) * parseInt(right);
        case '-':
            return (expression) => parseInt(left) - parseInt(right);
        case '^':
            return (expression) => parseInt(left) ** parseInt(right);
        case '/':
            return (expression) => parseInt(left) / parseInt(right);
    }
}; 

// This should return 4+6 = 10
const expression1 = '4+6';
let operator1 = evaluate(expression1);
console.log(`${expression1} = ${operator1(expression1)}`)

// This should return 8-3 = 5
const expression2 = '8-3';
let operator2 = evaluate(expression2);
console.log(`${expression2} = ${operator2(expression2)}`)

// This should return 3*9 = 27
const expression3 = '3*9';
let operator3 = evaluate(expression3);
console.log(`${expression3} = ${operator3(expression3)}`)

// This should return 7/2 = 3.5
const expression4 = '7/2';
let operator4 = evaluate(expression4);
console.log(`${expression4} = ${operator4(expression4)}`)

// This should return 2^6 = 64
const expression5 = '2^6';
let operator5 = evaluate(expression5);
console.log(`${expression5} = ${operator5(expression5)}`)