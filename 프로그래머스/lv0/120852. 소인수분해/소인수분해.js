function solution(n) {
    var answer = [];
    let i = 2;
    
    while (i <= n) {
        if (n % i === 0) {
            n = n / i;
            answer.push(i);
        } else {
            i++;
        }
    }
    
    return [...new Set(answer)];
}