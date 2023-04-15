function take<string>(arr: string[], n: number): string[] {
  if (n > arr.length) {
    return arr;
  }
  const newArr: string[] = [];
  for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
const newArr = take(["2"], 3);
console.log(newArr);
// any应该相同
