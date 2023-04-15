const reg = /^\d[^]*\d$/g;
const str = "123abc123"

console.log(reg.exec(str));
console.log(reg.exec(str));
console.log(reg.exec(str));
// console.log(str.match(reg));