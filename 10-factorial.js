const { argv } = require("node:process");
let k = Number(argv[2]);
if (isNaN(k)) k = 1;
function recursion(number, n) {
  if (n == 0) return number;
  return recursion(number * n, n - 1);
}
console.log(recursion(k, k));
