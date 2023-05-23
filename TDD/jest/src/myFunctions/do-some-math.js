function sum(a = 0, b = 0) {
    return a + b;
};

function substract(a = 0, b = 0) {
    return a - b;
};

function multiply(a = 0, b = 0) {
    return parseFloat((a * b).toFixed(3));
};

function divide(a = 0, b = 0) {
    if (b !== 0) {
        return parseFloat((a / b).toFixed(3));
    } else {
        throw new Error('0으로 나눌 수 업습니다!');
    }

};


export { sum, substract, multiply, divide }