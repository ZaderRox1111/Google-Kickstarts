const fs = `
2
2 1 2
2 3 2
`;
const input = fs.trim().split('\n');

let currentLine = 0;
const readline = () => {
  return input[currentLine++];
}

const findParentPQ = N => {
  let P, Q, parentP, parentQ;
  let parentN;

  if (N === 1) {
    [P, Q] = [1, 1];
    return [P, Q];
  }
  else {
    if (N % 2 === 0) {
      //even parent = n/2 p/(p+q)
      parentN = N / 2;

      [parentP, parentQ] = findParentPQ(parentN);
      P = parentP;
      Q = parentP + parentQ;
    }
    else {
      //p+q / q
      parentN = (N - 1) / 2;

      [parentP, parentQ] = findParentPQ(parentN);
      P = parentP + parentQ;
      Q = parentQ;
    }

    return [P, Q];
  }
}

const findN = (PQ, myN) => {
  let parentN;
  let [parP, parQ] = findParentPQ(myN);
  let curPQ = parP / parQ;

  if (curPQ === PQ) {
    return myN;
  }

  return findN(PQ, myN + 1);
}

const solveOne = N => {
  let [P, Q] = findParentPQ(N);

  return `${P} ${Q}`;
}

const solveTwo = (P, Q) => {
  return `${findN(1, P/Q, 1)}`;
}

function solve(line) {
  let final;

  let ID = line[0];
  if (ID === 1) {
    let N = line[1];

    final = solveOne(N);
  }
  else {
    let P = line[1];
    let Q = line[2];

    final = solveTwo(P, Q);
  }

  return final;
}

let T = readline();
for (let index = 1; index <= T; index++) {
  let line = readline().split(' ').map(x => {
    return Number(x);
  });

  console.log(`Case #${index}: ${solve(line)}`);
}
