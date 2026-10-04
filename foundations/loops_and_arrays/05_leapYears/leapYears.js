const leapYears = function (year) {
  if (year % 4 !== 0) return `${year} is not a leap year!`;
  if (year % 100 === 0 && year % 400 !== 0) return `${year} is not a leap year!`;
  return `${year} is a leap year!`;
};
console.log(leapYears(2003));
// Do not edit below this line
module.exports = leapYears;
