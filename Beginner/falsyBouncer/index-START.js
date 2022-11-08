/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

// Using a for…of loop
function falsyBouncer(array) {
  let result = [];
  for (const val of array) {
    if (val) {
      result.push(val);
    }
  }
  return result;
}

// Using .filter() (FASTER a little bit)
// function falsyBouncer(array) {
//   return array.filter((e) => Boolean(e));
// }

// console.log(falsyBouncer([1, 0, null, "", 5]));
// should return [1,5]

module.exports = falsyBouncer;
