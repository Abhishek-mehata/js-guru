# 🧠 What is Time and Space Complexity?

### ⏱ What is Time Complexity?
- ###### Time complexity tells us how fast an algorithm runs depending on the size of the input.
- ###### Think of it like: “How many steps will my code take as the input gets bigger?”

- ###### Time complexity tells us how the runtime of an algorithm increases as the size of the input (n) increases.
- ###### It does not measure time in seconds, but how many operations or steps the algorithm takes.

- ######  We use Big O Notation to express time complexity:

| Big O Notation | Name         | Description                                              |
| -------------- | ------------ | -------------------------------------------------------- |
| O(1)           | Constant     | Runs in the same time regardless of input size           |
| O(log n)       | Logarithmic  | Input is reduced by half each time (e.g., binary search) |
| O(n)           | Linear       | Time increases directly with input size                  |
| O(n log n)     | Linearithmic | Fast sorting algorithms (merge sort, quicksort)          |
| O(n²)          | Quadratic    | Nested loops on same input                               |
| O(2ⁿ), O(n!)   | Exponential  | Bruteforce algorithms (like solving permutations)        |

---
## 💡 Golden Rule
Time Complexity ≈ Number of times your code runs a step
- Loops = bad for time

- Nested loops = very bad 😅
-------

## ⚡️ Common Time Complexities (Big O Notation)
| Name         | Big-O      | What it means?                                      |
| ------------ | ---------- | --------------------------------------------------- |
| Constant     | O(1)       | Always takes the same number of steps for any input |
| Logarithmic  | O(log n)   | Cuts work in half each time (like binary search)    |
| Linear       | O(n)       | Work grows directly with input size                 |
| Linearithmic | O(n log n) | Used in efficient sorting (like merge sort)         |
| Quadratic    | O(n²)      | Work grows like a square (nested loops)             |
| Cubic        | O(n³)      | Three nested loops (rare in practice)               |
| Exponential  | O(2ⁿ)      | Doubles with each input (like recursion in fib)     |
| Factorial    | O(n!)      | Grows extremely fast (brute force permutations)     |

----

## ***🧮 Understanding Time Complexity in JavaScript (with examples)***

- ### 🔸 O(1) — Constant Time
```javascript
function getFirst(arr) {
  return arr[0]; // Always one operation
}
```
- 
  - No matter how large the array is, it's only one step. 
  - ✅ Great performance.

---
### ***🔸 O(n) — Linear Time***
```javascript
function printAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // n steps
  }
}
```
- Grows linearly with input.
----
### ***🔸 O(n²) — Quadratic Time***
```javascript
function pairCombinations(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]); // n * n steps
    }
  }
}
```
- 
  - Nested loops over same array.

  - Becomes very slow for large n.
---

### ***🔸 O(log n) — Logarithmic Time***

```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}
```
- 
  - Divides input in half each time.

  - Very efficient for large datasets.
---
### ***🔸 O(2ⁿ) — Exponential Time***

```javascript
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2); // Exponential growth
}
```
- 
    - Duplicated work.

    - Not efficient for large n.


---
---

# 💾 What is Space Complexity?
- ###### Space complexity is how much extra memory (RAM) your algorithm uses relative to input size.
- ###### Space complexity tells us how much memory (RAM) an algorithm uses as input grows.
- ######  It tells us how much memory (RAM) your program needs to work.

- ###### Includes input data, variables, function call stacks, auxiliary space.
  


### 💡 Things That Take Up Space:
- Variables
- Data structures (arrays, objects)
- Function call stacks (especially in recursion)

### 🧠 Key Rules:
- Don't count constants, like `let x = 5;`
- Focus on how memory or steps grow with input size
- For recursion: count the depth of recursive calls for space

## ***🔢 Common Space Complexities***
| Big-O | Meaning                      |
| ----- | ---------------------------- |
| O(1)  | Uses a fixed amount of space |
| O(n)  | Grows linearly with input    |
| O(n²) | Grows with square of input   |

---
### ***📘 Space Complexity Examples in JavaScript***


##### ➤ Example 1: Constant Space — `O(1)`
```javascript
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
```
- 
  - Only one variable total is used.
  - Doesn’t matter if array has 10 or 1000 items.
  - Space Complexity: O(1)
  
#### ➤ Example 2: Linear Space — O(n)
```javascript
function makeCopy(arr) {
    let copy = [];
    for (let i = 0; i < arr.length; i++) {
        copy.push(arr[i]);
    }
    return copy;
}
```
-  
  - We create a new array with same size.

  - If input is 10 items → new array has 10 items

  - Space grows with input

  - Space Complexity: O(n)
  
#### ➤ Example 3: Recursion uses stack memory
```javascript
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}
```
-  
  - Each call to `factorial` waits for the next.

  - If `n = 5`, it calls 5 times.

  - Space Complexity: `O(n)` (from the call stack)

------

## 🧠 PART 3: HOW TO ANALYZE CODE
- ###### Here’s how to analyze any function:
  - Count loops
  - Count recursive calls
  - Check memory allocations (arrays, objects, etc.)
  - Ignore constants (we care about growth, not actual numbers)

### 🛠 Pro Tips
- ##### ✅ Always simplify big-O:
  - `O(2n)` → `O(n)`
  - `O(n + n²)` → `O(n²)`


- ##### ✅ Only consider the dominant term
```javascript
function combo(arr) {
    // O(n)
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    // O(n²)
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
}
// Final time complexity = O(n²)
```


---
### 🔍 How to Analyze Complexity
- Ignore constants → O(2n) becomes O(n)

- Drop lower-order terms → O(n² + n) becomes O(n²)

- Focus on dominant term

- Check loops and recursions

- Look for array/object cloning (spreads, slice, etc.) — they affect space
  
### 💡 JavaScript-Specific Observations
- Spread operators (...) often copy arrays/objects → O(n) space

- String/array methods like .map(), .filter(), .reduce() create new arrays

- Recursion in JS can hit call stack limits → JS is not optimized for deep recursion



# Written and researched by ABHISHEK MEHATA(The AI)