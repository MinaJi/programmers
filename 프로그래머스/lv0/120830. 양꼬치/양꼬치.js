function solution(n, k) {
    var answer = 0;
    let drinks = Math.floor(n/10) * 2000
    answer = (12000 * n) + (2000 * k) - drinks
    return answer;
}