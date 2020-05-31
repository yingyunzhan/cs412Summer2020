// CS412 PS P2

const left = input => Number(input.split('')[0]);
const right = input => Number(input.split('')[2]);

const evaluate = input => {
    const operator = input.split('')[1];
    switch (operator) {

        case '+':
            return (left, right) => left + right;
            break;

        case '-':
            return (left, right) => left - right;
            break;

        case '*':
            return (left, right) => left * right;
            break;

        case '/':
            return (left, right) => left / right;
            break;

        case '%':
            return (left, right) => left % right;
            break;
    }
}

const expression = '8%3';
let l = left(expression);
let r = right(expression);
console.log(`${expression}=${evaluate(expression)(l,r)}`);

module.exports = {evaluate}
