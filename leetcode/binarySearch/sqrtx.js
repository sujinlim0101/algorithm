// https://leetcode.com/problems/sqrtx/submissions/
/**
 * @param {number} x
 * @return {number}
 */

 var mySqrt = function(x) {
  let start = 0;
  let end = x;
  
  while(start < end) {
      const mid = Math.floor((start + end) / 2);
      if (mid * mid === x) return mid;
      
      if (x < mid * mid) {
          end = mid - 1;
      } else {
          start = mid + 1;
      }
  }
  return x < end * end ? end - 1 : end;
  
};