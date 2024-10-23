const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fibonacci(n) {
    let a = 0, b = 1;
    while (a < n) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return a === n;
}

rl.question("Informe um número: ", (num) => {
    num = parseInt(num);
    if (fibonacci(num)) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${num} não pertence à sequência de Fibonacci.`);
    }
    rl.close();
});
