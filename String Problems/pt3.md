
What is a subsequence?
We consider str2 as a subsequence of str1 if we can find it in str1 even with characters are seperated.



## 📌 Check if One String is a Subsequence of Another in JavaScript

#### ❓ What is a Subsequence?
- A subsequence is a sequence of characters that appear in the same order in another string, but not necessarily consecutively.

#### ***Example:***
```python
str1 = "abcde"
str2 = "ace"
Here, "ace" is a subsequence of "abcde" because:

'a' comes first in "abcde"

'c' comes after 'a'

'e' comes after 'c'
All characters appear in order, even if they are separated.
```

### 🧠 Logic Behind the Code
- To check whether str2 is a subsequence of str1, we use a two-pointer technique to compare characters one by one.

## ✅ Step-by-Step Explanation:
Initialize Pointers:

ptr1 = 0 → starts at the first character of str1

ptr2 = 0 → starts at the first character of str2

Get the Lengths:

len1 = str1.length

len2 = str2.length

Traverse Both Strings:

We use a while loop to traverse both strings until one of them reaches the end:

```javascript
while (ptr1 < len1 && ptr2 < len2) {
    if (str1[ptr1] === str2[ptr2]) {
        // If characters match, move both pointers
        ptr1++;
        ptr2++;
    } else {
        // If characters don’t match, move only ptr1
        // Continue searching in str1
        ptr1++;
    }
}
Check Final Condition:

```
- ######  After the loop ends, if ptr2 has reached the end of str2, that means all characters of str2 were found in order in str1.
  
``` javascript
return ptr2 === len2;
```

# ✅ Full JavaScript Code
```javascript
function checkSubsequence(str1, str2) {
    let len1 = str1.length;
    let len2 = str2.length;

    let ptr1 = 0;
    let ptr2 = 0;

    while (ptr1 < len1 && ptr2 < len2) {
        if (str1[ptr1] === str2[ptr2]) {
            ptr1++;
            ptr2++;
        } else {
            ptr1++;
        }
    }

    // If we have checked all characters of str2, it's a subsequence
    return ptr2 === len2;
}
💡 Example Usage
javascript
Copy
Edit
console.log(checkSubsequence("abcde", "ace")); // true ✅
console.log(checkSubsequence("abcde", "aec")); // false ❌
console.log(checkSubsequence("subsequence", "sbsqnc")); // true ✅
```

📚 Summary
The logic uses a greedy two-pointer approach.

Time Complexity: O(n), where n is the length of str1.

Efficient and simple way to solve subsequence problems.

This is a foundational technique used in problems like longest subsequence, pattern matching, and more.

-----

# Short Review of the above contents:


### Logical Hint:
- ##### we create and initialize `ptr1` to 0 ------> for the first character on the `str1`

- ##### we create and initialize `ptr2` to 0 ------> for the first character on `str2`

- ##### We create and initialize length of `str1` as `len1`

- ##### We create and initialize length of `str2` as `len2`


- ##### Then we compare `str1[ptr1]` with ``str2[ptr2]`` each time to check they are equal or not.


```javascript
if str1[ptr1] == str2[ptr2]
    we increment both ptr1 and ptr2 by 1.

else
    we increment ptr1 only to continuing searching for the subsequence on str2
```

- ##### Then we wrap all the logic on given loop logic:
```javascript
while ptr1 < len1 and ptr2 < len2{

    if str1[ptr1] == str2[ptr2]{
        we increment both ptr1 and ptr2
    }

    else{
    we increment ptr1 only to continuing searching for the subsequence on str2
    }
}
```

- ##### After the loop to know if `str2` is a subsequence, `ptr2` must have gone until the end. In other words `ptr2` must me the length of `str2`. 
``` javascript 
return ptr2 == len2
```


### full code to check subsequence

```javascript
function checkSubsequence(str1,str2){
    let len1 = str1.length
    let len2 = str2.length

    let ptr1 = 0
    let ptr2 = 0

    while ( ptr1<len1 && ptr2<len2) {
        if (str1[ptr1] == str2[ptr2]){
            ptr1++
            ptr2++
        }else{
            ptr1++
        }
    }

    return ptr2 == len2
}
checkSubsequence("hello","hell") // Ture
```

---
---