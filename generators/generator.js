function *calculator(input) {
    console.log('hi')
    let doubleThat = 2 * (yield (input / 2))
    console.log('after first yield')
    let another = yield (doubleThat)
    console.log("another " + another)
    return (input * doubleThat * another);
}

const calc = calculator(10);

console.log(calc.next());
console.log(calc.next(7));
console.log(calc.next());

