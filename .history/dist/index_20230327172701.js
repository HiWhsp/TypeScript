const reg = /(.)\1{3}/g;
const str = "aaaa"

console.log(str.match(reg));
// console.log(str.match(reg));