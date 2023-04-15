// const reg = /abcD/i;
const reg = /(A|bcd)[0-9]/g;
const str = "Abcd"

console.log(str.match(reg));