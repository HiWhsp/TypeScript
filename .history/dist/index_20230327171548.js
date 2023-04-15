const reg = /(\w)\1(\w)\2/g;
const str = "aabb"

console.log(reg.exec(str));
console.log(reg.exec(str));
console.log(reg.exec(str));
// console.log(str.match(reg));