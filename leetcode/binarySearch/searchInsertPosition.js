// https://leetcode.com/problems/search-insert-position/

var searchInsert = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while(start < end) {
      const mid = Math.floor((start + end) / 2);
      const midNum = nums[mid];
      if (nums[mid] === target) return mid;
      midNum > target ? end = mid : start = mid + 1;
  }
  
  if (start === end) {
      const startNum = nums[start]
      return target <= startNum ? start : end + 1;
  }
  
};