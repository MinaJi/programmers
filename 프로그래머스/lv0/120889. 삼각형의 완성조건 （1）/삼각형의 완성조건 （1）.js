function solution(sides) {
    const maxNum = Math.max(...sides);
    let idx = sides.indexOf(maxNum);
    
  if (idx !== -1) sides.splice(idx, 1);
    
    return sides[0] + sides[1] > maxNum ? 1 : 2;
}