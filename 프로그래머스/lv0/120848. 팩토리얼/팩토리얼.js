function solution(n) {
    var answer = 1;
    let i;
    
    for (i = 1; answer <= n; i++) {
        answer *= i;
    }
    
    return i - 2;
}