/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    
  let start = 0
  let end = nums.length - 1
  
  while(start+1 < end) {
      let mid = start + Math.floor((end - start)/2)
     
      if(nums[mid] > target) {
          end = mid
      } else {
          start = mid
      }
  }
  if(nums[start] === target) return start
  if(nums[end] === target) return end
  return - 1
  
};


console.log(
  search([-1,0,3,5,9,12], 9)
)