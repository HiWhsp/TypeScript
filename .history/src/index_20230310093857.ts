function take(arr: any[], n: number): any[] {
  if (n > arr.length) {
    return arr;
  }
  const newArr: any[] = [];
  for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
const newArr = take(["2", 3, 4, 5, 1], 3);
console.log(newArr);
// any应该相同
