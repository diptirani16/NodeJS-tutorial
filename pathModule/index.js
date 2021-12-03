const path = require('path');

// path name
console.log(path.dirname('/my-workspace/nodejs-tut/pathModule/index.js'));

// extension of file
console.log(path.extname('/my-workspace/nodejs-tut/pathModule/index.js'));

// name of file
console.log(path.basename('/my-workspace/nodejs-tut/pathModule/index.js'));

// every element of file
const myPath = path.parse('/my-workspace/nodejs-tut/pathModule/index.js');
console.log(myPath);

// name of file without extension
console.log(myPath.name);


