function solution(n) {
    return Array.from(Array(n + 1), (_, i) => i).filter((i) => n % i === 0);
}