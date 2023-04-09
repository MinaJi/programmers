function solution(array) {
    let maxNum = Math.max.apply(null, array)
    return [maxNum, array.indexOf(maxNum)];
}