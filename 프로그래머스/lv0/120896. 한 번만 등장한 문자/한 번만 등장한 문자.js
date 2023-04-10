function solution(s) {
    var answer = '';
    let map = new Map();
    
    [...s].forEach(value => map.set(value, map.has(value) ? 
                                   map.get(value) + 1 : 1))
    answer = [...s]
        .filter(value => map.get(value) === 1)
        .sort()
        .join("");
    
    return answer;
}