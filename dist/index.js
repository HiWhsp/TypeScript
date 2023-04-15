const reg = /(.)\1{3}/g;
const str = "aaaabbbb"

console.log(str.match(reg));
// console.log(str.match(reg));

