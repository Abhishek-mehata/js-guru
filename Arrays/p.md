Basic problems

Alternate elements of an array
Last Updated : 04 Dec, 2024
Given an array arr[], the task is to print every alternate element of the array starting from the first element.

Examples:
```
Input: arr[] = [10, 20, 30, 40, 50]
Output: 10 30 50
Explanation: Print the first element (10), skip the second element (20), print the third element (30), skip the fourth element(40) and print the fifth element(50).


Input: arr[] = [-5, 1, 4, 2, 12]
Output: -5 4 12
```


Iterative Approach
The idea is to start iterating from index 0, print the element at that index, and then increment the index by 2 to move to the next alternate element. Keep on printing the elements till we reach the end of the array.

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

Recursive Approach
We can also print the alternate elements using recursion. We start from index = 0, that is the first element of the array and print its value. We then call the recursive function again with the (index + 2) as the current index.

```javascript
// Recursive JavaScript Program to print alternate
// elements of the array

// Recursive function to store all alternate elements
function getAlternatesRec(arr, idx, res) {
    if (idx < arr.length) {
        res.push(arr[idx]);
        getAlternatesRec(arr, idx + 2, res);
    }
}

function getAlternates(arr) {
    let res = [];
    getAlternatesRec(arr, 0, res);
    return res;
}

// Driver Code
let arr = [10, 20, 30, 40, 50];
let res = getAlternates(arr);
console.log(res.join(" "));
```