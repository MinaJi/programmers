function solution(my_string) {
    var answer = '';
      answer = my_string
    .split("")
    .reduce(
      (a, char) =>
        (a += char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()),
      ""
    );
    return answer;
}