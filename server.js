// console.log("Hello world!");
// // console.log(global);

// const os = require("os");
// const path = require("path");
// const {add, subtract, multiply, divide, mod} = require("./math");

// // console.log('OS Type: ', os.type());
// // console.log('OS Version: ', os.version());
// // console.log('OS Home Dir ', os.homedir());

// // console.log(__dirname);
// // console.log(__filename);

// // console.log(path.dirname(__dirname));

// console.log(add(9, 2));
// console.log(subtract(9, 2));
// console.log(multiply(9, 2));
// console.log(divide(9, 2));
// console.log(mod(9, 2));

const { format } = require('data-fns');

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));

