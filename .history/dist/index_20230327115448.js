// const reg = /abcD/i;
const reg = /(A|bcd)[3-9]/g;
const str = "Abcd"

console.log(str.match(reg));