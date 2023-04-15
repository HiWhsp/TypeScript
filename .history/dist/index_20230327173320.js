const reg = /(.)\1{3}/g;
const str = "aaaabb"

console.log(str.match(reg));
// console.log(str.match(reg));