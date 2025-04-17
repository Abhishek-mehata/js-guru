# JavaScript Arrays
- ##### In JavaScript, an array is an ordered list of values.
- ##### An Array is a special variable that can hold more than one value at a time.
- ##### Each value is called an element, and each element has a numeric position in the array, known as its index.
- #####  Arrays in JavaScript are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on.
  
  
## 🔸 How to Create an Array
- #### 1. Using square brackets `[]` (Most common way)
```javascript
let numbers = [1, 2, 3, 4, 5];
```

- #### 1. Using the `Array()` constructor
```javascript
let colors = new Array("red", "green", "blue");
```

## 🔸 Accessing Array Elements
- ###### You can access any item using its index (position). Index starts from 0.
```javascript
let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
```


## 🔸 Changing Values
```javascript
let fruits = ["apple", "banana", "mango"];
fruits[1] = "orange";
console.log(fruits); // ["apple", "orange", "mango"]
```

## 🔸 Array Length
- ###### Use `.length` to find the number of items in the array.
```javascript
let fruits = ["apple", "banana", "mango"];
console.log(fruits.length); // 3
```

---

## 🔹 ARRAY METHODS WITH EXAMPLES

- ### 📌 `push()` – Add item at the end
```javascript
let fruits = ["apple", "banana"];
fruits.push("mango");
console.log(fruits); // ["apple", "banana", "mango"]
```
- ### 📌 `pop()` – Remove last item
```javascript
let fruits = ["apple", "banana", "mango"];
fruits.pop();
console.log(fruits); // ["apple", "banana"]
```

- ### 📌 `shift()` – Remove first item
```javascript
let fruits = ["apple", "banana", "mango"];
fruits.shift();
console.log(fruits); // ["banana", "mango"]
```

- ### 📌 `unshift()` – Add item at the beginning
```javascript
let fruits = ["banana", "mango"];
fruits.unshift("apple");
console.log(fruits); // ["apple", "banana", "mango"]
```


- ### 📌 `indexOf()` – Get index of specific value of array
```javascript
let fruits = ["apple", "banana", "mango"];
console.log(fruits.indexOf("banana")); // 1
```

- ### 📌 `includes()` – Check if item exists
```javascript
let fruits = ["apple", "banana"];
console.log(fruits.includes("banana")); // true
```

- ### 📌 `slice(start, end)` – Get part of array (non-destructive)
```javascript
let fruits = ["apple", "banana", "mango", "grape"];
let sliced = fruits.slice(1, 3);
console.log(sliced); // ["banana", "mango"]
```


- ### 📌 `splice(start, deleteCount, add...)` – Add/remove items (destructive)
```javascript
let fruits = ["apple", "banana", "mango"];
fruits.splice(1, 1, "orange");
console.log(fruits); // ["apple", "orange", "mango"]
```


- ### 📌 `join()` – Combine into string
```javascript
let fruits = ["apple", "banana", "mango"];
console.log(fruits.join(" - ")); // "apple - banana - mango"
```


- ### 📌 `reverse()` – Reverse the array
```javascript
let fruits = ["apple", "banana", "mango"];
fruits.reverse();
console.log(fruits); // ["mango", "banana", "apple"]
```


- ### 📌 `sort()` – Sort alphabetically or numerically
```javascript
let fruits = ["banana", "apple", "mango"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "mango"]
```


- ### 📌 `concat()` – Combine two arrays
```javascript
let a = [1, 2];
let b = [3, 4];
let result = a.concat(b);
console.log(result); // [1, 2, 3, 4]
```


- ### 📌 `map()` – Create new array by modifying items of existing array
```javascript
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
```


- ### 📌 `filter()` – Create new array with matching condition
```javascript
let numbers = [1, 2, 3, 4];
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]
```


- ### 📌 `reduce()` – Reduce array to a single value
```javascript
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 10
```

- ### 📌 `find()` – First item that matches condition 
```javascript
let numbers = [1, 3, 5, 6, 8];
let firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 6
```

- ### 📌 `findIndex()` – Index of first item that matches
```javascript
let numbers = [1, 3, 5, 6, 8];
let index = numbers.findIndex(num => num % 2 === 0);
console.log(index); // 3
```

- ### 📌 `every()` – Check if all items pass a condition
```javascript
let numbers = [2, 4, 6];
console.log(numbers.every(num => num % 2 === 0)); // true
```


- ### 📌 `some()` – Check if any item passes a condition
```javascript
let numbers = [1, 3, 6];
console.log(numbers.some(num => num % 2 === 0)); // true
```







------

## 🔸 Useful Array Methods
| Method     | What it does                                 | Example                   |
| ---------- | -------------------------------------------- | ------------------------- |
| push()     | Add item to end                              | arr.push("newItem")       |
| pop()      | Remove last item                             | arr.pop()                 |
| shift()    | Remove first item                            | arr.shift()               |
| unshift()  | Add item to beginning                        | arr.unshift("newItem")    |
| indexOf()  | Find index of a value                        | arr.indexOf("apple")      |
| includes() | Check if value exists                        | arr.includes("banana")    |
| slice()    | Get part of array (does not change original) | arr.slice(1, 3)           |
| splice()   | Add/remove items (changes original array)    | arr.splice(1, 1, "grape") |
| join()     | Join all elements into a string              | arr.join(", ")            |
| reverse()  | Reverse the array                            | arr.reverse()             |
| sort()     | Sort the array alphabetically                | arr.sort()                |

---

## 🔹 LOOPING METHODS

- ### 🔹 LOOPING METHODS
```javascript
let fruits = ["apple", "banana", "mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```




- ### ✅ for...of loop
```javascript
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
  console.log(fruit);
}
```

- ### ✅ forEach() method
```javascript
let fruits = ["apple", "banana", "mango"];
fruits.forEach(fruit => console.log(fruit));
```

- ### ✅ map() method (already shown above)
```javascript
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled);
```
---
---