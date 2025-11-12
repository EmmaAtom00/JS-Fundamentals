const { argv } = require("node:process");
let argvLength;
argv.forEach((val, index) => {
  argvLength = index + 1;
});

if (argvLength < 3) console.log("No argument");
else console.log(argv[2]);
