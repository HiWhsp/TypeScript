const reg = /^\d[^]*\d$/g;
const str = "123abc123";

const reg1 = new RegExp(reg, str);

console.log(reg1.exec());

console.log(str.match(reg));