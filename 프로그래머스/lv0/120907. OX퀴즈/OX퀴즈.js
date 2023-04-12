function solution(quiz) {
    var answer = [];
    
    for (let i = 0; i < quiz.length; i++) {
        const equations = quiz[i];
        const [equation, result] = equations.split(" = ");
        answer.push(Function(`return (${equation}) === (${result}) ? "O": "X"`)());
    }
    return answer;
}