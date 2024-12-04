const fs = require("fs");

async function final() {
  let count = 0;
  await fs.readFile("./assets/Day_FOUR.txt", "utf8", (err, data) => {
    console.log(data[130], data[271], data[412], data[553]); // 141 -- Straight down
    console.log(
      data[141 * 9 + 3],
      data[141 * 9 + 143],
      data[141 * 9 + 283],
      data[141 * 9 + 423]
    ); // Bottom left diagonal
    for (let i = 0; i < data.length; i++) {
      if (
        data[i] === "M" &&
        data[i + 2] === "M" &&
        data[i + 1 + 141] === "A" &&
        data[i + 141 + 141] === "S" &&
        data[i + 141 + 141 + 2] === "S"
      ) {
        count++;
      }
      if (
        data[i] === "S" &&
        data[i + 2] === "S" &&
        data[i + 1 + 141] === "A" &&
        data[i + 141 + 141] === "M" &&
        data[i + 141 + 141 + 2] === "M"
      ) {
        count++;
      }
      if (
        data[i] === "S" &&
        data[i + 2] === "M" &&
        data[i + 1 + 141] === "A" &&
        data[i + 141 + 141] === "S" &&
        data[i + 141 + 141 + 2] === "M"
      ) {
        count++;
      }
      if (
        data[i] === "M" &&
        data[i + 2] === "S" &&
        data[i + 1 + 141] === "A" &&
        data[i + 141 + 141] === "M" &&
        data[i + 141 + 141 + 2] === "S"
      ) {
        count++;
      }
    }
    console.log(count);
  });
}

final();
