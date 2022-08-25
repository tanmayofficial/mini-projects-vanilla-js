var searchRange = function(arr, key) {
    
    function firstOcc(arr, key) {
      let start = 0, end = arr.length;
      let mid = start + (end - start) / 2;
      let ans = -1;
  
      while (start <= end) {

        mid = Math.floor(start + (end - start) / 2);
          
        if (arr[mid] === key) {
           ans = mid;
           end = mid - 1;
        }
        else if (arr[mid] > key) {
          end = mid - 1;
        }
        else {
          start = mid + 1;
        }

      }
      return ans;
    }

    function lastOcc(arr, key) {
      let start = 0, end = arr.length;
      let mid = start + (end - start) / 2;
      let ans = -1;

      while (start <= end) {

        mid = Math.floor(start + (end - start) / 2);
          
        if (arr[mid] === key) {
          ans = mid;
          start = mid + 1;
        }
        else if (arr[mid] > key) {
          end = mid - 1;
        }
        else {
          start = mid + 1;
        }
        
      }
      return ans;
    }
    
    let a = firstOcc(arr, key);
	let b = lastOcc(arr, key);
	
	return [a, b];
};

console.log(searchRange([5,7,7,8,8,10], 8));
console.log(searchRange([5,7,7,8,8,10], 7));
console.log(searchRange([], 0));

// console.log(arr.indexOf(key), arr.lastIndexOf(key))



