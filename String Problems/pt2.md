# Recursion in JavaScript

## What is Recursion?
Recursion is a programming technique where a function calls itself repeatedly until a base condition is met. It is commonly used to solve problems that can be broken down into smaller subproblems, such as:

- Factorial computation
- Fibonacci sequence
- Tree traversal
- Tower of Hanoi

---

## Basic Structure of a Recursive Function
A recursive function typically consists of two parts:

1. **Base Case**: The condition that stops the recursion.
2. **Recursive Case**: The function calls itself with a smaller version of the original problem.

### Syntax:
```javascript
function recursiveFunction(params) {
    if (baseCaseCondition) {
        return result; // Base case: Stops recursion
    } else {
        return recursiveFunction(smallerProblem); // Recursive case: Function calls itself
    }
}
```

---

## Example: Simple Recursion
```javascript
function doSomething(n) {
    if (n === 0) {
        console.log("Task completed");
        return;
    }

    console.log("I am doing something.");
    doSomething(n - 1);
}

doSomething(3);
```
### Output:
```
I am doing something.
I am doing something.
I am doing something.
Task completed
```

---

## Example 1: Factorial of a Number
Factorial of `n` (denoted as `n!`) is the product of all positive integers from `n` down to `1`.

**Example:**
```
Factorial of 5:  5 × 4 × 3 × 2 × 1 = 120
```

### Factorial Using a Loop
```javascript
function findFactorial(num) {
    let factorial = 1;
    for (let i = num; i > 0; i--) {
        factorial *= i;
    }
    return factorial;
}

console.log(findFactorial(5)); // Output: 120
```

### Factorial Using Recursion
```javascript
function findFactorial(num) {
    if (num === 0) return 1;
    return num * findFactorial(num - 1);
}

console.log(findFactorial(5)); // Output: 120
```

### Explanation:
1. The **base condition** is `num === 0`, which stops the recursion.
2. The **recursive call** is `findFactorial(num - 1)`, ensuring the number keeps reducing with each call.
3. The function **multiplies** the current number by the result of `findFactorial(num - 1)` until it reaches the base condition.

---

## Recursion vs Loops: Which is Better?
There is no definitive answer; it depends on the problem and readability of the code:

✅ **Use Recursion when:**
- The problem can be naturally divided into smaller subproblems.
- The recursive approach improves code readability (e.g., tree traversal, factorial, Fibonacci).

✅ **Use Loops when:**
- The iterative approach is more intuitive and easier to understand.
- You need better performance and avoid excessive memory usage due to recursive calls (stack overflow risk in deep recursion).

For example, in the factorial calculation, recursion leads to shorter and more readable code. However, for large numbers, loops may be a better choice to prevent excessive function calls.

---

### Conclusion
Recursion is a powerful concept in JavaScript, often useful for problems involving repeated breakdowns into smaller subproblems. However, it should be used wisely, keeping readability and performance in mind.

Happy coding! 🚀