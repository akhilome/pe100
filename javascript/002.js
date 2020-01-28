/*
Q: Sum of Even Fibonacci Numbers
*/

function getFiboSeq(max, start = 1) {
  let fibSeq = [start];
  for (let i = start; i < max; ++i) {
    const [lastEnt] = fibSeq.slice(-1);
    const [lastTwo = 1] = fibSeq.slice(-2, -1);
    fibSeq.push(lastEnt + lastTwo);
  }
  return fibSeq;
}

const isEven = num => num % 2 == 0;
const getEven = arr => arr.filter(isEven);
const getSum = arr => arr.reduce((accum, current) => accum + current, 0);
const fiboEvenSum = n => getSum(getEven(getFiboSeq(n)));

const sum = fiboEvenSum(10);

console.log({ sum }); // { sum: 44 }
