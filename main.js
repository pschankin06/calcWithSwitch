'use strict';

function calc(operator, a, b) {

    let result;
    const isNotValid = (operator === undefined || operator === null || typeof a !== 'number' || typeof b !== 'number' || a !== a || b !== b);

    if (isNotValid) {
        result = 'Error';
    } else {
        switch (operator) {
            case 'sum':
                result = a + b;
                break;
            case 'sub':
                result = a - b;
                break;
            case 'multi':
                result = a * b;
                break;
            case 'div':
            case 'rem':
                result = calcDivOrRem(operator, a, b);
                break;
            case 'pow':
                result = a ** b;
                break;
            default:
                result = 'Unknown operation';
        }
    }
    return result;
}


function calcDivOrRem(operator, a, b) {
    if (b === 0)
        return 'Error';
    if (operator === 'div')
        return a / b;
    if (operator === 'rem')
        return a % b;
}


console.log(calc('div', 5, 0))