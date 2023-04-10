function solution(my_string, num1, num2) {
    var newArr = [...my_string];
    [newArr[num1], newArr[num2]] = [newArr[num2], newArr[num1]];
    return newArr.join("");
}