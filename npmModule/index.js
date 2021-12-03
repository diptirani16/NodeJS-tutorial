import chalk from 'chalk';
import validator from 'validator';

console.log(chalk.blue('Hello World!'));
console.log(chalk.red.underline.inverse('Hello World!'));

const trueResult = validator.isEmail('dipti@gmail.com');
console.log(trueResult ? chalk.green.inverse(trueResult) : chalk.red.inverse(trueResult));

const falseResult = validator.isEmail('dipti.com');
console.log(falseResult ? chalk.green.inverse(falseResult) : chalk.red.inverse(falseResult));