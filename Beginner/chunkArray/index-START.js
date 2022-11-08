/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
 the above is not the right problem
 the problem is to chunk given array to chunk of size given as second parameter
*/

// Looping through the array
function chunkArray(array, size) {
  let result = [];
  for (const val of array) {
    let lastChunk = result[result.length - 1];
    if (!lastChunk || lastChunk.length === size) {
      result.push([val]);
    } else {
      lastChunk.push(val);
    }
  }
  return result;
}

// Iterating with the number of chunks
// function chunkArray(array, size) {
//   let result = [];
//   let arrCopy = [...array];
//   while (arrCopy.length > 0) {
//     result.push(arrCopy.splice(0, size));
//   }
//   return result;
// }

// Using .slice() (FASTER)
// function chunkArray(array, size) {
//   let result = [];
//   for (let i = 0; i < array.length; i += size) {
//     result.push(array.slice(i, i + size));
//   }
//   return result;
// }

// Recursion
// function chunkArray(array, size) {
//   if (array.length <= size) {
//     return [array];
//   }
//   return [array.slice(0, size), ...chunkArray(array.slice(size), size)];
// }

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5));
// should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]

module.exports = chunkArray;
