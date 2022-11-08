/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

// Using Sets
// function mergeArrays(...arrays) {
//   let jointArray = [];

//   arrays.forEach((array) => {
//     jointArray = [...jointArray, ...array];
//   });

//   return [...new Set([...jointArray])];
// }

// Using .filter()
// function mergeArrays(...arrays) {
//   let jointArray = [];

//   arrays.forEach((array) => {
//     jointArray = [...jointArray, ...array];
//   });
//   //   console.log(jointArray);
//   return jointArray.filter((e, i) => {
//     // console.log(jointArray.indexOf(e), i);
//     if (jointArray.indexOf(e) === i) {
//       return e;
//     }
//   });
// }

// Using .reduce() (FASTER)
function mergeArrays(...arrays) {
  let jointArray = [];

  arrays.forEach((array) => {
    jointArray = [...jointArray, ...array];
  });

  return jointArray.reduce((acc, cur) => {
    if (!acc.includes(cur)) {
      acc.push(cur);
    }
    return acc;
  }, []);
}

// console.log(mergeArrays([1, 2, 3, 3, 3], [1, 4, 5, 2]));
// should return [1,2,3,4,5]

module.exports = mergeArrays;
