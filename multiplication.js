// multiplication.js

const readline = require('readline');

// create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ask user for input
rl.question('Enter an integer: ', (input) => {
  const number = parseInt(input);

  // creating multiplication table
  for (let i = 1; i <= 10; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
  }

  rl.close();
});
