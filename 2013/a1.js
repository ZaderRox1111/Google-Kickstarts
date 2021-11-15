const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readline = () => {
  console.log(input[currentLine]);
  return input[currentLine++];
}

let T = readline();
for (let index = 1; index <= T; index++) {
  let [numBooks] = readline().split(' ');
  let shelf = readline().split(' ');

  console.log(`Case #${index}: ${solve(numBooks, shelf)}`);
}

const solve = (N, S) => {
  let Alex = [];
  let Bob = [];
  let alexIndex = 0;
  let bobIndex = N - 1;

  for (let i = 0; i < N; i++) {
    if (S[i] % 2 === 1) {
      addItem(Alex, S[i]);
    }
    else {
      addItem(Bob, S[i]);
    }
  }

  for (let i = 0; i < N; i++) {
    if (S[i] % 2 === 1) {
      S[i] = Alex[alexIndex];
      alexIndex++;
    }
    else {
      S[i] = Bob[bobIndex];
      bobIndex--;
    }
  }

  let output = '';
  for (let i = 0; i < N; i++) {
    output += `${S[i]} `;
  }

  return output;
}

const addItem = (arr, item) => {
  arr.push(item);

  n = arr.length;

  let i, key, j; 
    for (i = 1; i < n; i++)
    { 
        key = arr[i]; 
        j = i - 1; 

        while (j >= 0 && arr[j] > key)
        { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        arr[j + 1] = key; 
    } 
}
