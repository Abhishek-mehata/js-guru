### Understanding slice() and substring() in JavaScript (Deep Dive)

- Both slice() and substring() are used to extract a portion of a string, but they have some key differences in behavior.

1. ### slice(start, end)
 - Extracts a section of a string and returns it as a new string.

 - The start index is included, but the end index is excluded.

 - Accepts negative values, where -1 refers to the last character.


***Syntax:***
```javascript
string.slice(start, end);
```

***Examples:***
```javascript
let text = "JavaScript";

// Extract "Java"
console.log(text.slice(0, 4));  // Output: Java

// Extract "Script"
console.log(text.slice(4, 10)); // Output: Script

// Using negative indexes
console.log(text.slice(-6, -1)); // Output: Scrip
console.log(text.slice(-6));     // Output: Script
```
- ***Key Points of slice():***

  - If start is negative, it is counted from the end of the string.

  - If end is omitted, it extracts till the end of the string.

  - If start > end, it returns an empty string.

1. ### substring(start, end)
 - Works similarly to slice(), but does not support negative indexes.

 - If start is greater than end, it swaps the values.

***Syntax:***
```javascript
string.substring(start, end);
```

***Examples***
```javascript

let text = "JavaScript";

// Extract "Java"
console.log(text.substring(0, 4));  // Output: Java

// Extract "Script"
console.log(text.substring(4, 10)); // Output: Script

// `start` is greater than `end`, so it swaps them
console.log(text.substring(10, 4)); // Output: Script

// Negative values are treated as 0
console.log(text.substring(-6, 4)); // Output: Java
```

- ***Key Points of substring():***

  - If start > end, it swaps them (substring(10, 4) behaves like substring(4, 10)).

  - If start or end is negative, it treats it as 0.

------
---

### Differences Between slice() and substring()
| Feature                              | `slice()`                      | `substring()`                              |
| ------------------------------------ | ------------------------------ | ------------------------------------------ |
| Supports negative indexes            | ✅ Yes                          | ❌ No (Negative values become 0)            |
| If `end` is omitted                  | Extracts till the end          | Extracts till the end                      |
| Swaps `start` & `end` if start > end | ❌ No (returns empty string)    | ✅ Yes                                      |
| Best use case                        | When handling negative indexes | For simpler needs without negative indexes |



---
---

### Example to Show Differences

```javascript
let text = "JavaScript";

console.log(text.slice(-6, 4));      // Output: (empty string)
console.log(text.substring(-6, 4));  // Output: Java

console.log(text.slice(10, 4));      // Output: (empty string)
console.log(text.substring(10, 4));  // Output: Script
```

- #### When to Use Which?
- ##### Use slice() when you need negative indexes or when you don’t want automatic swapping.

  - Use substring() if you want automatic correction when start > end.
- -----
----
---
---
## Split in JS

  -     In JavaScript, the .split() method is used to divide a string into an array of substrings based on a specified separator. Let's break it down in-depth.

### 1. Syntax of .split()
```javascript
string.split(separator, limit);
```
 - ###### separator (optional) → Defines how the string should be split (e.g., a character, word, or regular expression). If omitted, the entire string is returned as an array with one element.

- ###### limit (optional) → Defines the maximum number of splits to perform. If provided, the resulting array will have at most limit elements.

### 2. Basic Example
```Javascript
let text = "Hello World!";
let result = text.split(" ");  // Split by space
console.log(result); 
// Output: ["Hello", "World!"]
```
-     Here, the space " " is used as the separator, splitting the string into an array of two elements.

### 3. Using Different Separators

-  #### Splitting by a Comma

```Javascript
let csv = "Apple,Banana,Cherry";
let fruits = csv.split(",");
console.log(fruits);
// Output: ["Apple", "Banana", "Cherry"]
```
- #### Splitting by a Character
```javascript
let word = "Hello";
let letters = word.split("");
console.log(letters);
// Output: ["H", "e", "l", "l", "o"]
```

- #### Splitting by a Specific Word
```javascript
let sentence = "I love JavaScript. JavaScript is amazing.";
let parts = sentence.split("JavaScript");
console.log(parts);
// Output: ["I love ", ".  is amazing."]
```
-----

### 1. Using a Limit
-     If you provide a limit, it restricts the number of splits:

```javascript
let text = "Red,Blue,Green,Yellow";
let colors = text.split(",", 2);
console.log(colors);
// Output: ["Red", "Blue"]
//Only the first two elements are included.
```

## 1. What if Separator is Not Found?
 -     If the separator doesn't exist in the string, the entire string is returned as a single array element.


```javascript
let text = "Hello World";
let result = text.split("-");
console.log(result);
// Output: ["Hello World"]
```

## 1. Splitting with a Regular Expression
-     You can use regex as a separator.

- #### Splitting by Multiple Separators

```javascript
let text = "Hello-World,How are you?";
let words = text.split(/[-, ]/);  // Split by "-", "," or " "
console.log(words);
// Output: ["Hello", "World", "How", "are", "you?"]
```

- #### Splitting by Any Digit

```
let str = "abc1def2ghi3jkl";
let parts = str.split(/\d/); 
console.log(parts);
// Output: ["abc", "def", "ghi", "jkl"]
```

## 1. Edge Cases
- #### (i) Empty String as a Separator

```javascript
let str = "Hello";
let arr = str.split("");
console.log(arr);
// Output: ["H", "e", "l", "l", "o"]
//Each character becomes a separate array element.
```

- #### (ii) Omitting the Separator
  
```javascript
let text = "Hello World";
let result = text.split();
console.log(result);
// Output: ["Hello World"]
//Since no separator is given, the string remains in an array.
```


- #### (iii) Using an Empty String with a Limit

```javascript
let str = "JavaScript";
let arr = str.split("", 4);
console.log(arr);
// Output: ["J", "a", "v", "a"]
//Splitting is limited to the first 4 characters.
```

# 1. Real-World Use Cases of Split()

- ### (i) Extracting File Extensions
```javascript
let fileName = "document.pdf";
let parts = fileName.split(".");
console.log(parts.pop());
// Output: "pdf"
```

- ### (ii) Counting Words in a Sentence

```javascript
let sentence = "This is a test sentence.";
let words = sentence.split(" ");
console.log(words.length);
// Output: 5
```

- ### (iii) Converting a CSV Line into an Array
```javascript
let csv = "John,Doe,30,Developer";
let person = csv.split(",");
console.log(person);
// Output: ["John", "Doe", "30", "Developer"]
```

---


## .split() vs .slice() vs .splice()

| Method         | Purpose                                                  |
| --------- | -------------------------------------------------- |
| .split()  | Splits a string into an array based on a separator |
|           |
| .splice() | Extracts a portion of an array or string           |
|           |
| .split()  | Modifies an array by adding/removing elements      |
|           ||
