// const reg = /abcD/i;
const reg = /([a-9]|[A-z])/g;
const str = "Abcd"

console.log(str.match(reg));