const { argv } = require("node:process");
// if(argv.length < 3)
function add(a, b) {
  return a + b;
}
console.log(add(Number(argv[2]), parseInt(argv[3])))
