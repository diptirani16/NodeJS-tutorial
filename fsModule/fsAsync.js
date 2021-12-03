const fs = require('fs');

// Async process always requires a callback function.
fs.writeFile('async-read.txt', 'Hi! I am async read file', (err) => {
    console.log('file is created');
})

fs.appendFile('async-read.txt', 'add content to file', (err) => {
    console.log('content added');
})

fs.readFile('async-read.txt', (err, res) => {
    console.log(res.toString());
})

// Or

fs.readFile('async-read.txt', 'UTF-8', (err, res) => {
    console.log(res);
})
