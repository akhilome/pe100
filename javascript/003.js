/*
Q: What is the largest prime factor of the given number?
*/

// Helpful Answer for fast Algo: https://math.stackexchange.com/a/1362350

function isPrime(n) {
  if (n < 2) return false;
  const smallPrimes = [2, 3, 5, 7];
  const checks = [n % 2 == 0, n % 3 == 0, n % 5 == 0, n % 7 == 0];
  if (!smallPrimes.includes(n) && checks.includes(true)) return false;
  return true;
}

function getPFs(n) {
  const factors = [];
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) factors.push(i);
  }

  const pFactors = factors.filter(isPrime);
  const [largest] = pFactors.slice(-1);
  return largest;
}

console.log(getPFs(600851475143));
// const r = isPrime(29);

// console.log(r);
