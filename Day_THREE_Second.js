const fs = require("fs");

async function final() {
  const regex = /(do\(\)|(don\'t\(\)))|(mul\([0-9]{0,}\,[0-9]{0,}\))/g;
  const regDo = /do\(\)/g;
  const regDoNot = /don\'t\(\)/g;
  const numReg = /[0-9]{0,}/g;
  let count = 0;
  let engaged = true;

  await fs.readFile("./assets/Day_THREE.txt", "utf8", (err, data) => {
    const mul = data.match(regex);

    const firstNum = mul.map((x) => {
      if (regDo.test(x)) {
        engaged = true;
      }

      if (regDoNot.test(x)) {
        engaged = false;
      }
      if (engaged === true) {
        return Number(x.match(numReg).slice(4).slice(0, 1));
      }
    });
    const secondNum = mul.map((x) => {
      if (regDo.test(x)) {
        engaged = true;
      }
      if (regDoNot.test(x)) {
        engaged = false;
      }
      if (engaged === true) {
        return Number(x.match(numReg).slice(4).slice(2, 3));
      }
    });
    const firFin = firstNum.filter((x) => {
      return x !== undefined;
    });
    const secFin = secondNum.filter((x) => {
      return x !== undefined;
    });
    for (let i = 0; i < firFin.length; i++) {
    
      count += firFin[i] * secFin[i];
    }
    console.log(count);
  });
}

final();

// 174336360
// 88802350