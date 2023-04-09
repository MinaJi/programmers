function solution(my_string) {
    var exp = my_string.split(" ").join("");
    return new Function(`return ${exp}`)();
}