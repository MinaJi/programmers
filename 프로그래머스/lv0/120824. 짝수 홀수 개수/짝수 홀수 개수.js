function solution(num_list) {
    let oddNum = num_list.filter((item) => item % 2 === 0).length;
    let evenNum = num_list.filter((item) => item % 2 === 1).length;
    return [oddNum, evenNum];
}