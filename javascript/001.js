/**
 * Q: Find the sum of all the multiples of 3 or 5 below 1000.
 */

function getSum(arr) {
  const sum = arr.reduce((accum, current) => accum + current, 0);
  return sum;
}

function isMutiple(number) {
  if (number % 3 == 0 || number % 5 == 0) {
    return true;
  } else {
    return false;
  }
}

function genMultiples(max) {
  const multiples = Array(max)
    .fill()
    .map((_, i) => {
      const number = i;
      if (isMutiple(number)) {
        return number;
      } else {
        return null;
      }
    })
    .filter(el => el != null);

  return multiples;
}

function getMultSum(number) {
  const multiples = genMultiples(number);
  const sum = getSum(multiples);
  return sum;
}

const sum = getMultSum(1000);


/**
 * unreadable nonsense just for the fun of it 👇🏾
 */

const _getMultSum = number => Array(number).fill().map((_, i) => (!(i % 3) || !(i % 5) ? i : null)).filter(e => e != null).reduce((a, c) => a + c, 0);
const _sum = _getMultSum(1000);

console.log({ sum, _sum }); // { sum: 233168, _sum: 233168 }
