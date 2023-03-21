function solution(price) {
    const discount = (price ,n)=> {
        return Math.floor(price-(price *  n) / 100)
    }
    
    if (price >= 500000) {
        return discount(price, 20)
    } else if (price >= 300000) {
        return discount(price, 10)
    } else if (price >= 100000) {
        return discount(price, 5)
    } else {
        return price
    }
    
}