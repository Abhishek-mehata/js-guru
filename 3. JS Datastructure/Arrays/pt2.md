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


- ### 2.  Linear Search Algorithm

- ###### Given an array, `arr` of `n` integers, and an integer element `x`, find whether element `x` is present in the array. Return the index of the first occurrence of `x` in the array, or -1 if it doesn’t exist.

```
Input: arr[] = [1, 2, 3, 4], x = 3
Output: 2
Explanation: There is one test case with array as [1, 2, 3 4] and element to be searched as 3. Since 3 is present at index 2, the output is 2.


Input: arr[] = [10, 8, 30, 4, 5], x = 5
Output: 4
Explanation: For array [10, 8, 30, 4, 5], the element to be searched is 5 and it is at index 4. So, the output is 4.


Input: arr[] = [10, 8, 30], x = 6
Output: -1
Explanation: The element to be searched is 6 and its not present, so we return -1.
```

- ##### In Linear Search, we iterate over all the elements of the array and check if it the current element is equal to the target element. If we find any element to be equal to the target element, then return the index of the current element. Otherwise, if no element is equal to the target element, then return -1 as the element is not found. Linear search is also known as `sequential search`.

#### Example
```javascript
// Javascript code to linearly search x in arr[].

function search(arr, n, x)
{
    for (let i = 0; i < n; i++)
        if (arr[i] == x)
            return i;
    return -1;
}

// Driver code

    let arr = [ 2, 3, 4, 10, 40 ];
    let x = 10; //searching element
    let n = arr.length; //length of arrar

    // Function call
    let result = search(arr, n, x);
    (result == -1)
        ? console.log("Element is not present in array")
        : console.log("Element is present at index " + result);

```

---
---
- ### 3. Largest element in an Array
  - ###### Given an array `arr`. The task is to find the largest element in the given array. 


#### Examples:
```
Input: arr[] = [10, 20, 4]
Output: 20
Explanation: Among 10, 20 and 4, 20 is the largest. 


Input: arr[] = [20, 10, 20, 4, 100]
Output: 100
```

#### i} Iterative Approach – `O(n)` Time and `O(1)` Space
- ###### The approach to solve this problem is to traverse the whole array and find the maximum among them.
```javascript
  function largest(arr) {
    let max = arr[0];

    // Traverse from second and compare
    // every element with current max
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

// Driver Code
const arr = [10, 324, 45, 90, 9808];
console.log(largest(arr)); //9808
```

#### ii} Recursive Approach – `O(n)` Time and `O(n)` Space
- ###### The idea is similar to the iterative approach. Here the traversal of the array is done recursively instead of an iterative loop. 


```javascript
function findMax(arr, i) {
    // Last index returns the element
    if (i === arr.length - 1) {
        return arr[i];
    }

    // Find the maximum from the rest of the array
    let recMax = findMax(arr, i + 1);

    // Compare with i-th element and return
    return Math.max(recMax, arr[i]);
}

function largest(arr) {
    return findMax(arr, 0);
}

// Driver Code
const arr = [10, 324, 45, 90, 9808];
console.log(largest(arr));
```



#### iii} Using Library Methods – `O(n)` Time and `O(1)` Space
- ###### Most of the languages have a relevant max() type in-built function to find the maximum element, such as  std::max_element in C++. We can use this function to directly find the maximum element.
```javascript
// Function to find the largest number in an array
function largest(arr) {
    return Math.max(...arr);
}

// Driver Code
const arr = [10, 324, 45, 90, 9808];
console.log(largest(arr));
```
---
---
- ## 4.Second Largest Element of an Array
   - ###### Given an array of positive integers `arr[]` of size `n`, the task is to find second largest distinct element in the array.
   - ###### Note: If the second largest element does not exist, return -1.

#### ***Test case Examples:***
```
Input: arr[] = [12, 35, 1, 10, 34, 1]
Output: 34
Explanation: The largest element of the array is 35 and the second largest element is 34.


Input: arr[] = [10, 5, 10]
Output: 5
Explanation: The largest element of the array is 10 and the second largest element is 5.


Input: arr[] = [10, 10, 10]
Output: -1
Explanation: The largest element of the array is 10 there is no second largest element.

```


- ### i} [Native Approach] using sorting

  - ##### 🧠 Approach: Native Sorting Method
     - ###### The idea is to sort the array in non-decreasing order.

     - ###### The largest element will be at index `n - 1` after sorting.

     - ###### Traverse the array in reverse from index `n - 2` and find the first element that is not equal to the largest.

     - If all elements are the same, return -1.



```javascript
// JavaScript program to find the second largest element in an array
// using sorting(method 1)

// Function to find the second largest element
function getSecondLargest(arr) {
    // Get the length of the array
    let n = arr.length;
    
    // Sort the array in non-decreasing order (ascending)
    // Example: [12, 35, 1, 10, 34, 1] becomes [1, 1, 10, 12, 34, 35]
    arr.sort((a, b) => a - b);
  
    // Start checking from the second last element (n-2)
    // because the last element (n-1) is the largest after sorting
    for (let i = n - 2; i >= 0; i--) {
        // If the current element is different from the largest element
        // it means this is the second largest
        if (arr[i] !== arr[n - 1]) {
            return arr[i]; // Return the second largest element
        }
    }
  
    // If all elements are the same, there is no second largest
    // Return -1 as a default case
    return -1;
}

// Test the function with a sample array
const arr = [12, 35, 1, 10, 34, 1];
console.log(getSecondLargest(arr)); // Output: 34
```

- ###### Time Complexity: O(n log n) due to sorting.

- ###### Space Complexity: O(1) (if we ignore sorting’s space in JavaScript).

---
- ### ii} [Better Approach] Two Pass Search
  - ###### The approach is to traverse the array twice. In the first traversal, find the maximum element. In the second traversal, find the maximum element ignoring the one we found in the first traversal.

```javascript
// JavaScript program to find the second largest element in the array
// using two traversals (passes through the array) ---[method 2]

function getSecondLargest(arr) {
    let n = arr.length;

    // Initialize two variables to store the largest and second largest values
    // Start with -1 assuming all array elements are non-negative
    let largest = -1, secondLargest = -1;

    // 🔁 First Pass: Find the largest element in the array
    for (let i = 0; i < n; i++) {
        // If the current element is greater than the current largest, update it
        if (arr[i] > largest)
            largest = arr[i];
    }

    // 🔁 Second Pass: Find the second largest element
    for (let i = 0; i < n; i++) {
        // Check if the current element is:
        // 1. Greater than the current secondLargest
        // 2. Not equal to the largest (to avoid picking the same value twice)
        if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i]; // Update second largest
        }
    }

    // Return the second largest element found
    // If no such element exists (all elements are same), returns -1
    return secondLargest;
}

// 🧪 Test the function with a sample array
let arr = [12, 35, 1, 10, 34, 1];

// Expected Output: 34 (since 35 is the largest, 34 is the second largest)
console.log(getSecondLargest(arr));
```

```
🔍 Explanation for `[12, 35, 1, 10, 34, 1]`:
`First Pass`: Finds the largest element.
    Iterates through: 12 → 35 → 1 → 10 → 34 → 1
    Result: `largest = 35`

`Second Pass`: Looks for the biggest number that's not 35.
    Iterates again: 12 → 1 → 10 → 34 → 1
    Result: `secondLargest = 34`
```

---

- ### iii} [Expected Approach] One Pass Search
- ##### The idea is to keep track of the largest and second largest element while traversing the array. Initialize largest and secondLargest with -1. Now, for any index `i`,
   - ###### If  `arr[i] > largest` , update secondLargest with largest and largest with `arr[i]`.
   - ###### Else If ` arr[i] < largest and arr[i] > secondLargest` , update secondLargest with `arr[i]`. 
  
```javascript
// JavaScript program to find the second largest element in the array
// using one traversal (single pass through the array)

// Function to find the second largest element in the array
function getSecondLargest(arr) {
    const n = arr.length;

    // Initialize two variables to track the largest and second largest elements
    // Start with -1 assuming all array elements are non-negative
    let largest = -1, secondLargest = -1;

    // 🔁 Single Pass: Find both largest and second largest in one loop
    for (let i = 0; i < n; i++) {

        // Case 1: If current element is greater than the current largest
        // Then update secondLargest with the current largest,
        // and update largest with current element
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }

        // Case 2: If current element is less than the largest
        // but greater than the current secondLargest
        // Then update secondLargest with the current element
        else if (arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }

        // If current element is equal to the largest, or smaller than both,
        // we do nothing and just move to the next element
    }

    // Return the second largest element
    // If no second largest found (like all elements are equal), it returns -1
    return secondLargest;
}

// 🧪 Test the function with a sample array
const arr = [12, 35, 1, 10, 34, 1];

// Expected Output: 34
// Explanation: 35 is the largest, and 34 is the next biggest distinct number
console.log(getSecondLargest(arr));
```

---
- ## 5.Remove duplicates from Sorted Array
    - You're given a sorted array.
    - You need to remove the duplicates in-place (without using extra space if possible), and return the number of unique elements.
    - Example:
```
Input:  [1, 2, 2, 3, 4, 4, 4, 5, 5]
Output: [1, 2, 3, 4, 5]
```

  - ### i} ✅ Approach 1: Using a Hash Set
    - Use a `Set` to store only unique values.
    - Replace duplicates as we go.

```javascript
function removeDuplicates(arr) {
    // Create a Set to keep track of unique values
    const s = new Set();

    // This index points to the position where the next unique element goes
    let idx = 0;

    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // If element is not in the set, it's unique
        if (!s.has(arr[i])) {
            s.add(arr[i]);       // Add to set
            arr[idx++] = arr[i]; // Place it at the next available spot
        }
    }

    // Return number of unique elements
    return idx;
}

// Driver code
const arr1 = [1, 2, 2, 3, 4, 4, 4, 5, 5];
const newSize1 = removeDuplicates(arr1);

// Display only the unique part of the array
console.log(arr1.slice(0, newSize1).join(' '));
// Output: 1 2 3 4 5
```

- ### ii} ✅✅ Approach 2: Optimized for Sorted Arrays (No Extra Space)
    - Since the array is sorted, duplicates are always next to each other.
    - Keep a pointer `idx` that tracks the place for the next unique item.
    - Compare each item with the previous one.
    - If it's not equal, it's a new unique value.
```javascript
function removeDuplicates(arr) {
    const n = arr.length;
    
    // If array has 0 or 1 element, it's already unique
    if (n <= 1) return n;

    // Index to place next unique element
    let idx = 1;

    // Start from the second element and go through the array
    for (let i = 1; i < n; i++) {
        // If current value is different from the previous one
        if (arr[i] !== arr[i - 1]) {
            arr[idx++] = arr[i];  // Place unique value at idx
        }
    }

    // idx is the number of unique elements
    return idx;
}

// Driver code
const arr2 = [1, 2, 2, 3, 4, 4, 4, 5, 5];
const newSize2 = removeDuplicates(arr2);

console.log(arr2.slice(0, newSize2).join(' '));
// Output: 1 2 3 4 5
```

---
---

- ### 6.Generating All Subarrays
  - A subarray is a contiguous part of an array. 
  - Problem Statement: Given an array `arr[]`, generate all possible non-empty subarrays.
  - For example, if you have an array `[1, 2, 3]`, the possible subarrays are:
```javascript
[1], [1, 2], [1, 2, 3], [2], [2, 3], [3]
```
 
```javascript
// Example 1
//Input:
arr[] = [1, 2, 3]
//Output:
[1], [1, 2], [1, 2, 3], [2], [2, 3], [3]

// Example 2
//Input:
arr[] = [1, 2]
//Output:
[1], [1, 2], [2]
```

 - #### i} ✅ Iterative Approach (Using Loops)
    - We use 3 nested loops:
        - `Outer loop` for the starting index of the subarray
        - `Middle loop` for the ending index of the subarray
        - `Inner loop` to collect and print elements from start to end
```javascript
function subArray(arr) {
    const n = arr.length;

    // Outer loop - selects the starting point
    for (let i = 0; i < n; i++) {

        // Middle loop - selects the ending point
        for (let j = i; j < n; j++) {

            // Inner loop - collects elements between start and end index
            let subarr = [];
            for (let k = i; k <= j; k++) {
                subarr.push(arr[k]); // adding element to subarray
            }

            // Print the current subarray
            console.log(subarr);
        }
    }
}

// Test with an example array
const arr = [1, 2, 3, 4];
console.log("All Non-empty Subarrays:");
subArray(arr);
```

```javascript
// Output:
// All Non-empty Subarrays:
[1]
[1, 2]
[1, 2, 3]
[1, 2, 3, 4]
[2]
[2, 3]
[2, 3, 4]
[3]
[3, 4]
[4]
```

 - #### ii} 🔁 Recursive Approach
    - In this approach, we use recursion with two pointers:
      - `start` : start index of subarray
      - `end` : end index of subarray
   - 🔄 Steps:
     - If `end == arr.length`, stop recursion.
     - If `start > end`, reset `start = 0` and increase end.
     - Otherwise, print subarray from `start` to `end` and call the function again with `start + 1` .
```javascript
function printSubArrays(arr, start, end) {
    // Base case: If we reach the end of array
    if (end === arr.length) return;

    // If starting index is greater than end, reset start and increase end
    if (start > end) {
        printSubArrays(arr, 0, end + 1);
    } else {
        // Build subarray from start to end
        let subArray = [];
        for (let i = start; i <= end; i++) {
            subArray.push(arr[i]);
        }

        // Print the subarray
        console.log(subArray);

        // Move the starting index forward
        printSubArrays(arr, start + 1, end);
    }
}

// Example usage
const arr = [1, 2, 3];
console.log("All Non-empty Subarrays (Recursive):");
printSubArrays(arr, 0, 0);
```

```javascript
// Output:
// All Non-empty Subarrays:
[1]
[1, 2]
[1, 2, 3]
[1, 2, 3, 4]
[2]
[2, 3]
[2, 3, 4]
[3]
[3, 4]
[4]
```

---
---




















 



