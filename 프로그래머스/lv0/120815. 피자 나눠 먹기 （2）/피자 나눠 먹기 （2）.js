function solution(n) {
    let slice = 6;
    let hcf;
    
    for(let i = 1; i <= n && i <= slice; i++) {
        if(n % i === 0 && slice % i === 0) {
            hcf = i;
        }
    }
    let lcm = (n * slice) / hcf;
    return lcm/slice;
}