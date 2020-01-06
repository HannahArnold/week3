// // write

// const isPrime = num => {
//   //   return true;
//   //divide by one or itself = prime
//   if (num == 1) {
//     return false;
//   }
//   if (num == 2) {
//     return true;
//   }
//   for (i = 3; i <= num; i += 2) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return true;
// };
// let result = isPrime();

// console.log(result);
num = ;
const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};
console.log(isPrime(num));
