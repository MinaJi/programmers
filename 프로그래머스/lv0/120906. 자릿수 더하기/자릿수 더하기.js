function solution(n) {
    return [...String(n)].map(Number).reduce((a, c) => a + c, 0);
}