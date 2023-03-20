function solution(numbers) {
    var answer = 0;
    newArr = numbers.sort((a,b)=>b-a);
    answer = newArr[0]*newArr[1]
    return answer;
}