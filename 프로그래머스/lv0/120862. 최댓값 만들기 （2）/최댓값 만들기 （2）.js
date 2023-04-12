function solution(numbers) {
    var answer = Number.NEGATIVE_INFINITY;
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i  + 1; j < numbers.length; j++) {
            const result = numbers[i] * numbers[j];
            if (result > answer) {
                answer = result;
            }
        }
    }
    return answer;
}