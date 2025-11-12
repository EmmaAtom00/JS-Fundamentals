const { argv } = require("node:process");
let k = Number(argv[2]);
if (isNaN(k)) k = 1;
function recursion(number) {
  if (k == 0) return number;
  number = number * k;
  k = k - 1;
  return recursion(number);
}
console.log(recursion(k));
