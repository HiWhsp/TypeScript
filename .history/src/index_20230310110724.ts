// 回调函数：判断数组中的某一项是否满足条件
// type callback = (n: number, i: number) => boolean;
type callback<T> = (n: T, i: number) => boolean;
// 封装一个filter
function filter<T>(arr: T[], callback: callback<T>): T[] {
  const newArr: T[] = [];
  arr.forEach((n, i) => {
    if (callback(n, i)) {
      newArr.push(n);
    }
  });
  return newArr;
}

const arr = [3, 4, 5, 2, 1, 6];
console.log(filter(arr, (n) => n % 2 !== 0));

// 接口
// interface callback<T> {
//   (n: T, i: number): boolean;
// }
