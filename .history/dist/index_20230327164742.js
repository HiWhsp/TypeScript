const reg = /^\d[^]*\d$/g;
const str = "123abc123"

console.log(reg.exec());

console.log(str.match(reg));