const fs = require("fs");

async function final() {
  let leftString = [];
  let rightString = [];
  let difference = 0;
  const rightRegex = /[0-9]+\n/g;
  const leftRegex = /^[0-9]+/gm;

  await fs.readFile("./assets/Day_ONE.txt", "utf8", (err, data) => {
    for (let i = 0; i < data.match(rightRegex).length; i++) {
      rightString.push(data.match(rightRegex)[i].slice(0, 5));
    }
    rightString.sort((x, y) => x - y);

    for (let i = 0; i < data.match(leftRegex).length; i++) {
      leftString.push(data.match(leftRegex)[i].slice(0, 5));
    }
    leftString.sort((x, y) => x - y);

    for (let i = 0; i < rightString.length; i++) {
      if (Number(rightString[i]) > Number(leftString[i])) {
        difference += Number(rightString[i]) - Number(leftString[i]);
      }
      if (Number(rightString[i]) < Number(leftString[i])) {
        difference += Number(leftString[i]) - Number(rightString[i]);
      }
      if (Number(rightString[i]) === Number(leftString[i])) {
        difference += 0;
      }
    }
  });

  return difference;
}

final();

//   1579939   :)
