function sumPrimes(num) {
  let primeNum = [];
  for (let i =2; i <= num; i++){
    if (primeNum.every((primeNum) => i % primeNum !== 0))primeNum.push(i);
  }
  return primeNum.reduce((sum, primeNum) => sum + primeNum, 0);
}

sumPrimes(10);
