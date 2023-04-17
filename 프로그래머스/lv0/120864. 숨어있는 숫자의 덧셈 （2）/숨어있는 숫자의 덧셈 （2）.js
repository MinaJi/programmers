function solution(my_string) {
    var answer = 0;
    let regex = my_string.match(/\d+/g);
    let numbers = regex ? regex.map(Number) : 0
    return numbers !== 0 ? numbers.reduce((a, c) => a + c, 0) : 0;
}