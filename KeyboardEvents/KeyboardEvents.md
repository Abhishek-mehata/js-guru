# Keyboard Events in JavaScript: onkeydown, onkeypress, onkeyup

JavaScript provides several event handlers to detect keyboard interactions. The most commonly used ones are `onkeydown`, `onkeypress` (deprecated), and `onkeyup`. Understanding these events will help you manage user inputs effectively.

---

## **1️⃣ onkeydown**
✅ **Triggers when a key is pressed down**.  
✅ **Fires repeatedly** if the key is held down.  
✅ **Detects all keys**, including special keys like `Shift`, `Ctrl`, `Alt`, `Arrow keys`, etc.  

### **Example:**
```html
<input type="text" onkeydown="handleKeyDown(event)" placeholder="Type something..." />

<script>
  function handleKeyDown(event) {
    console.log("Key down:", event.key, "KeyCode:", event.keyCode);
  }
</script>
```

### **Common Use Cases:**
- Detect when a key is **first pressed**.
- Prevent certain keys from being pressed.
- Implement **keyboard shortcuts**.

---

## **2️⃣ onkeypress** (Deprecated ❌)
⚠️ **This event is deprecated in modern browsers** and should NOT be used.  
⚠️ **It does not detect special keys** like `Shift`, `Arrow keys`, `Esc`, `Delete`, etc.  

✅ **Triggers when a key that produces a character is pressed**.  
✅ **Does not fire for special keys (Ctrl, Shift, Arrow keys, etc.)**.  

### **Example:**
```html
<input type="text" onkeypress="handleKeyPress(event)" placeholder="Type something..." />

<script>
  function handleKeyPress(event) {
    console.log("Key pressed:", event.key, "Character Code:", event.charCode);
  }
</script>
```

### **Why is it Deprecated?**
- It **does not detect** special keys like `Backspace`, `Enter`, or `Arrow keys`.
- `onkeydown` and `onkeyup` provide **more control and work with all keys**.
- Modern browsers no longer recommend using `onkeypress`.

✅ **Use `onkeydown` or `onkeyup` instead!**

---

## **3️⃣ onkeyup**
✅ **Triggers when a key is released (lifted up)**.  
✅ Fires **only once** when you release the key.  
✅ Works with **all** keys (including special keys).  

### **Example:**
```html
<input type="text" onkeyup="handleKeyUp(event)" placeholder="Type something..." />

<script>
  function handleKeyUp(event) {
    console.log("Key released:", event.key, "KeyCode:", event.keyCode);
  }
</script>
```

### **Common Use Cases:**
- Detect when a key is **completely released**.
- Validate input **after** the user has typed.
- Implement **auto-suggestions** (e.g., Google Search).

---

## **🔹 Difference Between onkeydown, onkeypress, and onkeyup**
| Event | When it fires | Detects all keys? | Repeats when key is held? |
|-------|-------------|----------------|--------------------|
| `onkeydown` | When a key is first pressed | ✅ Yes | ✅ Yes |
| `onkeypress` | (Deprecated) When a character key is pressed | ❌ No (Only character keys) | ✅ Yes |
| `onkeyup` | When a key is released | ✅ Yes | ❌ No |

---

## **🔹 Practical Example: Live Key Logger**
```html
<input type="text" id="inputField" placeholder="Type here..." />

<script>
  document.getElementById("inputField").addEventListener("keydown", function(event) {
    console.log("Key Down:", event.key);
  });

  document.getElementById("inputField").addEventListener("keyup", function(event) {
    console.log("Key Up:", event.key);
  });
</script>
```
📝 **How it works?**
- Logs each key press and release in the console.

---

## **🎯 Best Practices**
✅ Use `onkeydown` to detect key **press** events (especially for shortcuts).  
✅ Use `onkeyup` to detect when the user **finishes typing** (for input validation).  
❌ Avoid using `onkeypress` as it is **deprecated**.  

---

Hope this helps! 🚀 If you have any questions or need more examples, feel free to ask! 😊

