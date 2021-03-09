let arr = [1, 2, 3, "--discard-next", 1337, "--discard-prev", 4, 5];
let resultArray = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == "--discard-next") {
    if (i + 1 < arr.length) {
      i++;
    }
    continue;
  }

  if (arr[i] == "--discard-prev") {
    if (i > 0) {
      if (arr[i - 2] == "--discard-next") {
        continue;
      }
      resultArray.pop();
    }
    continue;
  }
  if (arr[i] == "--double-next") {
    if (i + 1 < arr.length) {
      resultArray.push(arr[i + 1]);
    }
    continue;
  }
  if (arr[i] == "--double-prev") {
    if (i - 1 > 0) {
      if (arr[i - 2] == "--discard-next") {
        continue;
      }
      resultArray.push(arr[i - 1]);
    }
    continue;
  }
  resultArray.push(arr[i]);
}

return console.log(resultArray);
