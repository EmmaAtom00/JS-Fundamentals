const { argv } = require("node:process");
let i = 0;
while (i < Number(argv[2])) {
  console.log("C is fun");
  i++;
}
