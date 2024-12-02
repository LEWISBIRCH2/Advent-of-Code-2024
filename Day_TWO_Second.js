const fs = require("fs/promises");

let count = 0;

fs.readFile("./assets/Day_TWO.txt", "utf-8").then((d) => {
  const levels = d.split("\n");
  let safeTotal = 0;
  for (let i = 0; i < levels.length; i++) {
    const nums = levels[i].split(" ").map((x) => {
      return Number(x);
    });
    count = 0;
    const safe = analyseData(nums);
    if (safe) {
      safeTotal++;
    }
  }
  console.log(safeTotal);
});

function analyseData(nums) {
  let safe = true;
  let asc = 1;

  if (nums[0] > nums[1]) {
    asc = -1;
  }

  for (let j = 0; j < nums.length - 1; j++) {
    if (
      (nums[j + 1] - nums[j]) * asc <= 0 ||
      (nums[j + 1] - nums[j]) * asc > 3
    ) {
      safe = false;
    }
  }
  if (safe) {
    return true;
  } else {
    count++;
    let total = 0;
    if (count < 2) {
      for (let k = 0; k < nums.length; k++) {
        const newNums = nums.filter((num, index) => {
          return index !== k;
        });
        if (analyseData(newNums)) {
          total++;
        }
      }
      if (total > 0) {
        return true;
      } else {
        return false;
      }
    }
  }
}
