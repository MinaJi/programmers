function solution(array, n) {
    var answer = 0;
    let newArr = [];
    
    newArr = array.sort((a, b) => a - b);
    
    answer = newArr.reduce((prev, curr)=>{
        return Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev;
    })
    
    return answer;
}