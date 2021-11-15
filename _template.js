const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readline = () => {
  return input[currentLine++];
}

let T = readline();
for (let index = 1; index <= T; index++) {


  console.log(`Case #${index}: ${solve()}`);
}

function solve() {
  
}
