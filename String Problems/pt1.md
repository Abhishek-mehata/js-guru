# String Reversal & Palindrome Check in JavaScript  

This document covers two essential string operations in JavaScript:  
1. **Reversing a String**  
2. **Checking if a String is a Palindrome**  

## 📌 Reverse a String  

The following JavaScript snippet demonstrates how to reverse a string using `split()`, `reverse()`, and `join()` methods:  

```javascript
const x = "hello";
const stringArray = x.split('');  // Convert string to array
const reversedString = stringArray.reverse().join(''); // Reverse array & join back
console.log(reversedString); // Output: "olleh"
```

## 📌 Palindrome Check  

A **palindrome** is a word, phrase, number, or sequence that reads the same forward and backward. Examples: `"madam"`, `"121"`, `"racecar"`.  

### 📝 Approach 1: Using a Loop  

We compare the first half of the string with the second half to determine if it's a palindrome.  

```javascript
function isPal(str) {
    let j = str.length - 1;

    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[j]) {
            return false;
        }
        j--;
    }
    return true;
}

console.log(isPal("racecar")); // true
console.log(isPal("nitin"));   // true
console.log(isPal("hello"));   // false
```

### 🔍 Explanation  

- We loop only up to `str.length / 2` because the second half mirrors the first half.  
- **Example Walkthrough (racecar):**  

| Index | Left Character | Right Character | Comparison |
|--------|---------------|----------------|------------|
| 0      | 'r'           | 'r'            | ✅        |
| 1      | 'a'           | 'a'            | ✅        |
| 2      | 'c'           | 'c'            | ✅        |
| 3      | Loop stops    | (middle reached) | -       |

Since all characters match, `"racecar"` is a palindrome.  

### 🏆 Time Complexity  
- **O(n/2) ≈ O(n)** (since we only iterate through half the string).  

---

### 📝 Approach 2: Using Built-in Methods  

A more optimized approach using JavaScript string manipulation:  

```javascript
function checkPalindrome(str) {
    str = str.toLowerCase();  
    let reverseStr = str.split('').reverse().join('');  
    return str === reverseStr;
}

console.log(checkPalindrome("Abhi")); // false
console.log(checkPalindrome("madam")); // true
```

- **Steps:**  
  - Convert to lowercase for case insensitivity.  
  - Use `split('')` to create an array of characters.  
  - Reverse the array using `reverse()`.  
  - Join it back to a string and compare it with the original.  

**Efficiency:** O(n) time complexity.  

---

### 📝 Approach 3: Using a Loop (Alternative)  

Another variation of the loop-based approach:  

```javascript
function checkPal(str) {
    str = str.toLowerCase();
    let j = str.length - 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[j]) {
            return false;
        }
        j--;
    }
    return true;
}

console.log(checkPal("nitin")); // true
console.log(checkPal("hello")); // false
```

### 🔹 Key Differences  
- This method iterates through the **entire string**, unlike Approach 1, which stops at the middle.  

---

## 🚀 Summary  

| Approach  | Method Used | Time Complexity | Space Complexity |
|-----------|------------|----------------|------------------|
| Loop      | Two-pointer technique | O(n) | O(1) |
| Built-in  | `split()`, `reverse()`, `join()` | O(n) | O(n) |
| Alternative | Iterating through the full string | O(n) | O(1) |

✅ **Use the loop method for efficiency.**  
✅ **Use the built-in method for simplicity.**  

---



