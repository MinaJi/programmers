function solution(my_string) {
    var answer = '';
    let arr = [...new Set(my_string)];
    answer = arr.join("");
    return answer;
}