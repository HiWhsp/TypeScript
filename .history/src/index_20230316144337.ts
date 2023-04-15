type callback<T> = (n: T, i: number) => boolean

function take<T>(arr: T[], callback: callback<T>): T[] {
  const newArr: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const newArr = take<number>([1, 2, 3, 4, 5], (n, i) => n % 2 === 0);
console.log(newArr);