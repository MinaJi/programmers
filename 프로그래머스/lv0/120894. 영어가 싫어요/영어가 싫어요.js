function solution(numbers) {
    var answer = 0;
    const strToNum = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    };
    
    answer = numbers.replace(
        /zero|one|two|three|four|five|six|seven|eight|nine/g, (item) => {
            return strToNum[item];
        }
    );
    
    return Number(answer);
}