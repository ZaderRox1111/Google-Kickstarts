// Have to add the k-1 or k for initial runthrough
// if k - s > s restart game, length is n + k
// if k - s < s go back, length is k-s + n-s + k
// could also see the min of n vs k-s + n-k   <--

const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const T = input[0];
let curTestNum = 1;

for (let index = 0; index < T; index++) {
    let curCase = input[curTestNum].split(' ');
    n = Number(curCase[0]);
    k = Number(curCase[1]);
    s = Number(curCase[2]);
    
    let result = solve(n, k, s);
    console.log('Case #' + curTestNum + ': ' + result);
    
    curTestNum++;
}

function solve(n, k, s) {
    return Math.min(n + k, (k-s) + (n-s) + k);
}