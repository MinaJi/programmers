function solution(order) {
    var answer = 0;
    let arr = [...order.toString()].map(Number);
    
    arr.map((v)=>{
        if(v % 3 === 0 && v !== 0) {
            answer++
        }
    })
    return answer;
}