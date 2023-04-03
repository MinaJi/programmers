function solution(s) {
    var answer = 0;
    let newArr = [];
    newArr = s.split(' ');

    for(let i=0; i<newArr.length; i++){
        if(newArr[i] !== "Z"){
            answer += parseInt(newArr[i]);
        } else {
            answer -= parseInt(newArr[i-1]);
        }
    }

    return answer;
}