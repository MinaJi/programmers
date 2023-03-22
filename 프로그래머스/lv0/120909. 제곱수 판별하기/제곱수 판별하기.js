function solution(n) {
    let answer = 0;
    answer = n ** 2
    return Number.isInteger(Math.sqrt(n)) ? 1 : 2
}