function take<T>(arr: any[], n: number): T[] {
  if (n > arr.length) {
    return arr;
  }
  const newArr: T[] = [];
  for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
const newArr = take<number>(["2", 3, 4, 5, 1], 3);
console.log(newArr);
// any应该相同
