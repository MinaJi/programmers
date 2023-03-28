function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

function solution(balls, share) {
    return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
}

// 반복문 말고 재귀 함수 사용

// 팩토리얼을 재귀 함수로 구현
// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   } else { 
//     return n * factorial(n - 1);
//   }
// }

// 더 간단하게 화살표 함수로 이렇게 함
// const factorial = (n) => n === 0 ? 1 : n * factorial(num - 1)
