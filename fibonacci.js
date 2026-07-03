const fibs = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];

  let result = [0, 1];
  for (let i = 0; i < n - 2; i++ ) {
    result.push(result[result.length - 1] + result[result.length - 2]);
  }
  return result;
}

const fibsRec = (n) => {
  console.log("This was printed recursively");
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let arr = fibsRec(n - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
}
