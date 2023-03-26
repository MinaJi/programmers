function solution(hp) {
    let generals = Math.floor(hp / 5);
    hp -= generals * 5;
    let soldiers = Math.floor(hp / 3);
    hp -= soldiers * 3
    
    let workers = hp;
    
    return generals + soldiers + workers;
}