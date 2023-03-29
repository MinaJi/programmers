function solution(num_list, n) {
    var answer = [[]];
      answer = Array(Math.ceil(num_list.length / n))
    .fill("")
    .reduce((a, c, i) => {
      return [...a, [...num_list].splice(i * n, n)];
    }, []);
    return answer;
}