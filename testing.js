function summation(num) {
    const numArr = [];
    for (let i = 0; i < num; i++) {
        numArr.push(num - i);
    }
    return numArr.reduce((a, b) => a + b, 0);
}

console.log(summation(5));