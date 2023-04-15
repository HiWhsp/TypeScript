const reg = /(\w)\1(\w)\2/g;
const str = "aabb"

console.log(str.match(reg));
// console.log(str.match(reg));