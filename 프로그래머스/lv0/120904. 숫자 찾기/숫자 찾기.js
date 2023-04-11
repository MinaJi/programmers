function solution(num, k) {
    var answer = 0;
    let arr = Array.from(String(num), Number);
    
    answer = arr.findIndex((array) => array === k);
    if(answer === -1) {
        return answer;
    } else {
        return answer + 1
    }
    return answer;
}