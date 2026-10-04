const sumAll = function (min, max) {
  let result = 0;
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";

  for (let i = min; i <= max; i++) {
    result += i;
  }
  return result;
};

console.log(sumAll(1, 5));
// Do not edit below this line
module.exports = sumAll;
