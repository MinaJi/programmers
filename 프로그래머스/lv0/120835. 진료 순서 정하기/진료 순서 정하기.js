function solution(emergency) {
    var answer = [];
    let newArr = [];
    
    newArr = emergency.slice().sort((a,b)=>b-a);
    emergency.map((item)=>answer.push(newArr.indexOf(item)+1))
    
    return answer;
}