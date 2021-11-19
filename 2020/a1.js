const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readline = () => {
  return input[currentLine++];
}

const swap = (arr, first, second) => {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}

function solve(N, arr) {
  let prevOdd, prevEven;
  let prevOddIndex, prevEvenIndex;
  let firstOdd = true, firstEven = true;

  let final = '';

  for (let outIndex = 0; outIndex < N; outIndex++) {
    for (let inIndex = 0; inIndex < N; inIndex++) {
      if (arr[inIndex] % 2 === 0) {
        //even
        if (!firstEven && arr[inIndex] > prevEven) {
          swap(arr, inIndex, prevEvenIndex);
        }
        
        prevEven = arr[inIndex];
        prevEvenIndex = inIndex;
        firstEven = false;
      }
      else {
        if (!firstOdd && arr[inIndex] < prevOdd) {
          swap(arr, inIndex, prevOddIndex);
        }
        
        prevOdd = arr[inIndex];
        prevOddIndex = inIndex;
        firstOdd = false;
      }
    }

    firstEven = true;
    firstOdd = true;
  }

  arr.forEach(item => {
    final += item + ' ';
  });

  return final;
}

let T = readline();
for (let index = 1; index <= T; index++) {
  let [N] = readline().split(' ').map(x => {
    return Number(x);
  });
  let arr = readline().split(' ').map(x => {
    return Number(x);
  })

  console.log(`Case #${index}: ${solve(N, arr)}`);
}
