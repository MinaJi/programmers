function solution(money) {
    // answer = Math.floor(money / 5500);
    // let change = money - answer * 5500;
    
    return [Math.floor(money/5500),money%5500];
}