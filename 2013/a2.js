const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readline = () => {
  return input[currentLine++];
}

const lenDict = {
  1: '',
  2: 'double ',
  3: 'triple ',
  4: 'quadruple ',
  5: 'quintuple ',
  6: 'sextuple ',
  7: 'septuple ',
  8: 'octuple ',
  9: 'nonuple ',
  10: 'decuple ',
}

const numDict = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine'
}

function solve(N, format) {
  format = format.split('-');
  let phoneArr = [];
  let prevSpot = 0;
  let final = '';

  format.forEach((gap, index) => {
    phoneArr[index] = N.slice(prevSpot, prevSpot + Number(gap));
    prevSpot = prevSpot + Number(gap);
  });

  phoneArr.forEach(group => {
    let wkgIndex;
    let len = 1;

    for (let index = 0; index < group.length; index++) {
      wkgIndex = index;

      while (wkgIndex < group.length + 1 &&
             group[wkgIndex] === group[wkgIndex + 1]) {
        len++;
        wkgIndex++;
      }

      final += `${lenDict[len]}${numDict[Number(group[index])]} `;

      if (len > 10) {
        for (let lenIndex = index; lenIndex < index + len; index++) {
          final += `${numDict[Number(group[index])]} `;
        }
      }
      len = 1;
      index = wkgIndex;
    }
  });

  return final;
}

let T = readline();
for (let index = 1; index <= T; index++) {
  let [N, format] = readline().split(' ');

  console.log(`Case #${index}: ${solve(N, format)}`);
}
