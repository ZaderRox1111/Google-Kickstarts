const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readline = () => {
  return input[currentLine++];
}

function solve() {
  
}

let T = readline();
for (let index = 1; index <= T; index++) {
  let [N, B] = readline().split(' ').map(x => {
    return Number(x);
  });
  let arr = readline().split(' ').map(x => {
    return Number(x);
  })

  console.log(`Case #${index}: ${solve()}`);
}
