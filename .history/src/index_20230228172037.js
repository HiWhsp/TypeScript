Promise._all = function (proms) {
  return new Promise((resolve, reject) => {
    try {
    } catch (error) {
      console.log();
      reject(error);
    }
  });
};

Promise._all([
  Promise.reject(1),
  Promise.resolve(2),
  Promise.resolve(3),
  4,
]).then(
  (data) => {
    console.log("成功", data);
  },
  (reason) => {
    console.log("失败", reason);
  }
);
