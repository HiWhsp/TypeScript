const reg = /ab/g;
const str = "abababab"

console.log(reg.exec(str));
console.log(reg.exec(str));
console.log(reg.exec(str));
// console.log(str.match(reg));