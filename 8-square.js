const { argv } = require("node:process");
const size = Number(argv[2]);
let i = 0;

if (isNaN(size)) console.log("Missing size");
else
  while (i < size) {
    let row = "";
    for (let j = 0; j < size; j++) {
      row += "X";
    }
    console.log(row);
    i++;
  }
