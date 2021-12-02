const fs = require('fs');

// creates a new file if that file doesn't exist.
fs.writeFileSync('read.txt', 'Hi! I am a new file.');

// overwrites the existing file with new data.
fs.writeFileSync('read.txt', 'Hi! I am overwriting the file content.');

// add new content to the existing file without overwriting.
fs.appendFileSync('read.txt', 'Hi! I am adding this to the existing content.');

// read from a file
const buffer_data = fs.readFileSync('read.txt');
const org_data = buffer_data.toString();
console.log(org_data);
// Node.js includes an additional data type called buffer.
// (not available in browser's javascript )
// Buffer is mainly used to store binary data.
// while reading a from a file or recieving packets over network.
// <Buffer 48 69 21 20 49 20 61 6d 20 6f 76 65 72 77 72 69 74 69 6e 67 20 74 68 65 20 66 69 6c 65 20 63 6f 6e 74 65 6e 74 2e 48 69 21 20 49 20 61 6d 20 61 64 64 ... 33 more bytes>

// rename an existing file
fs.renameSync('read.txt', 'read-write.txt');