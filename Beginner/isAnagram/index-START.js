/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

// const sanitizeString = function (str) {
//   return str
//     .toLowerCase()
//     .replace(/[^a-z]/g, "")
//     .split("")
//     .sort()
//     .join("");
// };

// function isAnagram(stringA, stringB) {
//   return sanitizeString(stringA) === sanitizeString(stringB);
// }

// console.log(isAnagram("silent", "listen"));

// second approach with character mapping

function createCharMap(text) {
  let charMap = {};
  for (const char of text) {
    if (charMap[char] !== undefined) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  return charMap;
}

function isAnagram(stringA, stringB) {
  if (stringA.length === stringB.length) {
    let mapA = createCharMap(stringA);
    let mapB = createCharMap(stringB);
    for (const char in mapA) {
      if (mapA[char] !== mapB[char]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

console.log(isAnagram("silent", "listen"));

module.exports = isAnagram;
