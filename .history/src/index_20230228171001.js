Promise._all = function (proms) {
  return new Promise((resolve, reject) => {
    try {
      const results = []; //接受每个Promise成功后的结果
      let count = 0; // Promse计数总数
      let fulfilledCount = 0; // 已完成的数量
      for (const p of proms) {
        // resolve([1,2,3,4])
        // 思考：如何保证数组是有序的?如何知道啥时候所有promise都完成?
        let i = count; // 保存一下当前下标
        count++;

        /**
         * 先包一下p,处理有直接写数字的情况
         */
        Promise.resolve(p).then((data) => {
          //异步，代码运行到这里，循环就已经结束了，因为在微队列
          fulfilledCount++;
          // console.log(i);
          results[i] = data;
          // results.push(data);不能用push
          console.log(fulfilledCount);
          if (fulfilledCount === count) {
            // 当前是最后一个Promise完成了
            console.log("全部完成");
            resolve(results);
          }
        }, reject);
      }
      console.log(count, fulfilledCount);
      /**
       * 特殊情况1：传递空数组
       */
      if (count === 0) {
        resolve(results);
      }
    } catch (error) {
      reject(error);
      console.error(error);
    }

    /**
     * 特殊情况2：执行中报错:try,catch
     */
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
