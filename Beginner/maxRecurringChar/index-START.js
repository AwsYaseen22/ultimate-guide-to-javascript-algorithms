/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

function maxRecurringChar(text) {
  let maxChar = "";
  let maxVal = 0;
  let obj = {};
  for (const l of text) {
    if (obj.hasOwnProperty(l)) {
      obj[l]++;
    } else {
      obj[l] = 1;
    }
  }
  for (const key in obj) {
    if (obj[key] > maxVal) {
      maxVal = obj[key];
      maxChar = key;
    }
  }
  return maxChar;
}

// function maxRecurringChar(text) {
//   let maxVal = 0;
//   let obj = {};
//   let charArr = [];
//   let valArr = [];
//   for (const l of text) {
//     if (obj.hasOwnProperty(l)) {
//       obj[l]++;
//     } else {
//       obj[l] = 1;
//     }
//   }
//   charArr = Object.keys(obj);
//   valArr = Object.values(obj);
//   maxVal = Math.max(...valArr);
//   return charArr[valArr.indexOf(maxVal)];
// }

// console.log(maxRecurringChar("aabbbbbbbbccddddd"));

module.exports = maxRecurringChar;
