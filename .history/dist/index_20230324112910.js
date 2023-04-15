// const reg = /abcD/i;
const reg = new RegExp("abc");
const str = "Abcd"

console.log(reg.test(str));