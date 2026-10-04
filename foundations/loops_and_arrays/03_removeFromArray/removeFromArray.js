const removeFromArray = function (arr, ...args) {
  let result = arr.filter((el) => args.includes(el));
  console.log(result);
};
removeFromArray([1, 2, 3, 4, "plamen"], "plamen", 3);
// Do not edit below this line
module.exports = removeFromArray;
