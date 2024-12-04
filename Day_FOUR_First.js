const fs = require("fs");

async function final() {
  let count = 0;
  await fs.readFile("./assets/Day_FOUR.txt", "utf8", (err, data) => {
console.log(data[130], data[271], data[412], data[553]) // 141 -- Straight down
console.log(data[(141*9+3)],data[(141*9+143)],data[(141*9+283)],data[(141*9+423)]) // Bottom left diagonal
    for (let i = 0; i < data.length; i++) {
      if (
        data[i] === "X" &&
        data[i + 1] === "M" &&
        data[i + 2] === "A" &&
        data[i + 3] === "S"
      ) {
        count++;
      } 
      if (
        data[i] === "S" &&
        data[i + 1] === "A" &&
        data[i + 2] === "M" &&
        data[i + 3] === "X"
      ) {
        count++;
      }
      if (
        data[i] === "X" &&
        data[i + 141] === "M" &&
        data[i + 282] === "A" &&
        data[i + 423] === "S"
      ) {
        count++;
      }
      if (
        data[i] === "S" &&
        data[i + 141] === "A" &&
        data[i + 282] === "M" &&
        data[i + 423] === "X"
      ) {
        count++;
      }
      if (
        data[i] === "X" &&
        data[i + 142] === "M" &&
        data[i + 284] === "A" &&
        data[i + 426] === "S"
      ) {
        count++;
      }
      if (
        data[i] === "S" &&
        data[i + 142] === "A" &&
        data[i + 284] === "M" &&
        data[i + 426] === "X"
      ) {
        count++;
      }
      if (
        data[i] === "S" &&
        data[i + 140] === "A" &&
        data[i + 280] === "M" &&
        data[i + 420] === "X"
      ) {
        count++;
      }
      if (
        data[i] === "X" &&
        data[i + 140] === "M" &&
        data[i + 280] === "A" &&
        data[i + 420] === "S"
      ) {
        count++;
      }
   
    }
    console.log(count)
  });
}

final();
