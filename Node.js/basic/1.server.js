
// const math = require('./2.math.js');
const {add , sub , mul , div} = require('../2.math')
const os = require('os')

const path = require('path')
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);
// console.log(path.parse(__filename));

console.log(add(3,5));
console.log(sub(4,4));
console.log(mul(4,4));
console.log(div(5,5));

