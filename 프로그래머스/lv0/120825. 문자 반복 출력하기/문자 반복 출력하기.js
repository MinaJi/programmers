function solution(my_string, n) {
    var answer = '';
    answer = my_string.split("").reduce((a, c) => a + c.repeat(n), []);
    return answer;
}