const fs = require("fs");

async function final() {
  const regex = /mul\([0-9]{0,}\,[0-9]{0,}\)/g;
  const numReg = /[0-9]{0,}/g;
  let count = 0;
  await fs.readFile("./assets/Day_THREE.txt", "utf8", (err, data) => {
    const mul = data.match(regex);
    const slicedFirst = mul.map((x) => {
      return Number(x.match(numReg).slice(4).slice(0, 1));
    });
    const slicedSecond = mul.map((x) => {
      return Number(x.match(numReg).slice(4).slice(2, 3));
    });

    for (let i = 0; i < slicedFirst.length; i++) {
      count += slicedFirst[i] * slicedSecond[i];
    }
    console.log(count);
  });
}

final();

// 174336360