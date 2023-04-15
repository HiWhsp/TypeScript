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

const newArr = take([1, 2, 3, 4, 5], 2);
console.log(newArr);