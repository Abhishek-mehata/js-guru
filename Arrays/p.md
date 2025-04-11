## Basic problems

- #### 1. Alternate elements of an array
  
  - ###### Given an array `arr[]`, the task is to print every alternate element of the array starting from the first element.

***Examples:***
```
Input: arr[] = [10, 20, 30, 40, 50]
Output: 10 30 50
Explanation: Print the first element (10), skip the second element (20), print the third element (30), skip the fourth element(40) and print the fifth element(50).


Input: arr[] = [-5, 1, 4, 2, 12]
Output: -5 4 12
```


- #### Iterative Approach
  -  ###### The idea is to start iterating from index 0, print the element at that index, and then increment the index by 2 to move to the next alternate element. Keep on printing the elements till we reach the end of the array.

```javascript
// Iterate JavaScript Program to print alternate elements
// of the array

function getAlternates(arr) {
    let res = [];
    
    // Iterate over all alternate elements
    for (let i = 0; i < arr.length; i += 2) {
        res.push(arr[i]);
    }
    return res;
}

// Driver Code
const arr = [10, 20, 30, 40, 50];
const res = getAlternates(arr);
console.log(res.join(" "));
```

- ### Recursive Approach
  - ###### We can also print the alternate elements using recursion. We start from index = 0, that is the first element of the array and print its value. We then call the recursive function again with the (index + 2) as the current index.

```javascript
function getAlter(arr, index, resArr) {
    if (index < arr.length) {
        resArr.push(arr[index]);               // Add current element to result
        getAlter(arr, index + 2, resArr);      // Recurse by skipping 1 element
    }
    return resArr;
}
getAlter([1,2,4,5,8,9,0], 0, [])//[1, 4, 8, 0]
// This means:
// Start at index 0
// Add arr[0] = 1
// Then go to index 2 → arr[2] = 4
// Then to index 4 → arr[4] = 8
// Then to index 6 → arr[6] = 0
// Then to index 8 → out of bounds → recursion stops

```

### OR
```javascript
function getAlternates(arr, index = 0) {
    let resArr = [];
    function helper(i) {
        if (i < arr.length) {
            resArr.push(arr[i]);
            helper(i + 2);
        }
    }
    helper(index);
    return resArr;
}

console.log(getAlternates([1, 2, 4, 5, 8, 9, 0]));  // Output: [1, 4, 8, 0]
```

-----
-----

