function solution(polynomial) {
    let terms = polynomial.split(/\s*\+\s*/);
    let xArr = [];
    let numArr = [];
    let xNumber = [];
    let xCount = 0;
    
    terms.map((item) => {
        if (item.match("x")) {
            xArr.push(item);
        } else {
            if (item === "0") return "";
            numArr.push(parseInt(item));
        }
    });
    
    if (xArr.length === 0) {
        return new Function(`return ${polynomial}`)().toString();
    }
    
    xArr.map((item) => {
        if (item === "x") {
            xCount++;
        }
        if (item.match(/\d/)) {
            xNumber.push(parseInt(item.split(/[a-zA-Z]+/g)));
        }
    });
    
    xCount += xNumber.reduce((a, c) => a + c, 0);
    let sumNumber = numArr.reduce((a, c) => a + c, 0);
    if (xCount === 1) {
        xCount = "";
    }
    
    return numArr.length === 0 
        ? `${xCount}x`
    : sumNumber !== 0
    ? `${xCount}x + ${sumNumber}`
    : `${xCount}x`
}