function getUserName() {
  if (Math.random() < 0.5) {
    return "袁进";
  }
  return 404;
}
let myname = getUserName(); //名字可能错了，类型也可能错误
myname = myname
  .split(" ")
  .filter((it) => it) //过滤空的
  .map((it) => it[0].toUpperCase() + it.substr(1))
  .join(" ");