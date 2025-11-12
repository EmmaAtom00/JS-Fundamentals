const { argv } = require("node:process");
const k = Number(argv[2]); // use const since you’re not reassigning it

function factorial(n) {
  if (isNaN(n) || n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(k));
