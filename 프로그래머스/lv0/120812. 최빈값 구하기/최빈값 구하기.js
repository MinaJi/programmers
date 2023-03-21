function solution(array) {
    var answer = 0;
      const hashmap = array.reduce((a, v) => {
    a[v] = (a[v] || 0) + 1;
    return a;
  }, {});
    
      obj = Object.keys(hashmap).filter((x) => {
    return hashmap[x] == Math.max.apply(null, Object.values(hashmap));
  });
    
      if (Object.values(obj).length > 1) {
    answer = -1;
  } else {
    answer = parseInt(obj);
  }
    
    return answer;
}