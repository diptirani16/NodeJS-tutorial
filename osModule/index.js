const os = require('os');

// os architecture of your system
console.log(os.arch());

// check hostname
console.log(os.hostname())

// check platform
console.log(os.platform())

// operating system name
console.log(os.type());

// free memory in your system
const freeMemory = os.freemem();
console.log(freeMemory); // value in bytes

console.log(`${freeMemory / 1024 / 1024 / 1024}`);  // value converted in GB

// total memory
const totalMemory = os.totalmem();
console.log(`${totalMemory / 1024 / 1024 / 1024}`);