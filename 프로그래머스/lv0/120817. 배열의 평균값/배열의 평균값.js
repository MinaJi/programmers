function solution(numbers) {
    var answer = 0;
    answer = numbers.reduce((a,c)=>a+c)/numbers.length
    return answer;
}