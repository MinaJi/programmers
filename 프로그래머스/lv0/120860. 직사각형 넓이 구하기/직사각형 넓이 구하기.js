function solution(dots) {
    const x = dots.map((dot) => dot[0]); // x좌표값들
    const y = dots.map((dot) => dot[1]); // y좌표값들
    const width = Math.max(...x) - Math.min(...x); // x의 길이
    const height = Math.max(...y) - Math.min(...y); // y의 길이
    
    return width * height;
}

// x 가장 큰 값 - x 가장 작은 값 * y 가장 큰 값 - y 가장 작은 값
