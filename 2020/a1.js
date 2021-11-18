const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readline = () => {
  return input[currentLine++];
}

let T = readline();
for (let index = 1; index <= T; index++) {
  let [N, B] = readline().split(' ');
  let arr = readline().split(' ').map(x => {
    return Number(x);
  })

  console.log(`Case #${index}: ${solve(Number(B), arr)}`);
}

function solve(B, arr) {
  let price, counter = 0;

  arr.sort(function(a, b) {
    return a - b;
  });
  price = arr[0];

  while (price <= B) {
    B -= arr[counter];
    counter++;
    price = arr[counter];
  }

  return counter;
}
