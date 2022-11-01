// For loop (Faster)
// function searchReplace(s, f, r) {
//   if (f[0] === f[0].toUpperCase()) {
//     r = r[0].toUpperCase() + r.slice(1);
//   }
//   return s.replace(f, r);
// }

// RegEx (Slower)
function searchReplace(s, f, r) {
  let reg = new RegExp(f, "gi");
  if (/[A-Z]/.test(f[0])) {
    r = r[0].toUpperCase() + r.slice(1);
  }
  return s.replace(reg, r);
}

console.log(
  searchReplace("He is Sleeping on the couch", "Sleeping", "sitting")
);

module.exports = searchReplace;
