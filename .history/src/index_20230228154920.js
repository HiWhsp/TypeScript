/**
   * 得到一个新的Promise，该Promise的状态取决于proms的执行
   * proms是一个迭代器，包含多个Promise
   * 全部Promise成功，返回的Promise才成功，数据为所有Primsise成功的数据，并且顺序时按照传入的顺序排列
   * 只要有一个Promise失败，则=返回的Pormise失败，原因是第一个Promise失败的原因
   * @param {iterator} proms
   */
Promise.all = function (proms) {
  return new MyPromise((resolve, reject) => {
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
        MyPromise.resolve(p).then((data) => {
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
}

console.log(new Promise.all([
  Promise.resolve(1),
  Promise.resolve(1),
  Promise.resolve(1)
]));

/*******test all *******/

/**
* 不仅可以传数组，还可以传递迭代器。不是所有迭代器都支持for循环，所以。。。
*/
// Promise.all([
//   MyPromise.reject(1),
//   MyPromise.resolve(2),
//   MyPromise.resolve(3),
//   4,
// ]).then(
//   (data) => {
//     // data:[1,2,3,4]
//     // 传递[pro1,pro2,pro3,4]的话:内部默认处理Promise.resolve(4)
//     console.log("成功", data);
//   },
//   (reason) => {
//     // reason:reason2
//     console.log("失败", reason);
//   }
// );