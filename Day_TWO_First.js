const fs = require("fs");

async function final() {
  await fs.readFile("./assets/Day_TWO.txt", "utf8", (err, data) => {
    const levels = data.split("\n");
    let safeCount = 0;
    for (let i = 0; i < levels.length; i++) {
      let nums = levels[i].split(" ").map((x) => {
        return Number(x);
      });
      let safe = true;
      //console.log(nums.length);

      let DIR = 1;
      if (nums[1] < nums[0]) {
        DIR = -1;
      }

      for (let j = 0; j < nums.length; j++) {
        if (
          (nums[j + 1] - nums[j]) * DIR > 3 ||
          (nums[j + 1] - nums[j]) * DIR < 1
        ) {
          safe = false;
        }
      }
      if (safe === true) {
        safeCount++;
        console.log(nums)
      }
    }
    console.log(safeCount);
  });
}
final();
