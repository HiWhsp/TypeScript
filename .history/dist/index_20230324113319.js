// const reg = /abcD/i;
const reg = new RegExp("abc", "i");
const str = "Abcd"

console.log(reg.test(str));