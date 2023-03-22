function solution(arr) {
    var answer = 0;
    answer = arr.reduce((a, c, i, {length})=>{
        return i === length - 1 ? (a+c)/length : a+c
    })
    return answer;
}