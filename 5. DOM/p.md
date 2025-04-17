# JavaScript - Browser Object Model
- ###### The Browser Object Model (BOM) allows JavaScript to interact with the web browser itself, not just the content on the webpage.

- ###### While the Document Object Model (DOM) deals with the structure and content of the webpage (like text, buttons, images, etc.), the BOM gives you control over the browser’s features, such as:
   - The browser window (you can open, close, or resize it)
   - The URL or location (you can get or change the current web address)

   - The browser history (you can move forward or backward in the user's history)

- ###### Information about the user’s browser (like which browser they are using)

- ###### In short, the BOM makes it possible for JavaScript to communicate with the browser and create more dynamic and interactive experiences for users.

## Browser Object Model Types
| Object    | Types                                                                                                       |
| --------- | ----------------------------------------------------------------------------------------------------------- |
| window    | Represents the browser window, controlling aspects like size and location, and serves as the global object. |
| navigator | Provides details about the user's browser and operating system.                                             |
| location  | Manages the current URL, allowing for retrieval and modification of the web address.                        |
| screen    | Offers information about the user's screen, such as its width and height.                                   |
| history   | Provides access to the browser's session history, enabling navigation through the user's browsing history.  |

#### Let's see each part of the Browser Object Model in more detail.

---

### 🔵 1. `window` Object – The Root of Everything
- ###### The `window` object is the main object in the BOM, representing the browser window or tab itself. It's the top-level object, and everything else in the browser is contained within it.
- ###### The `window` object is the global object in browsers. All BOM objects are actually properties of the window `object`.
- ###### You can access:
  - Dimensions
  - Popups
  - Global variables
  - Timers
  - DOM (via window.document)


- #### ✅ Useful Properties and Methods of `window` object
```javascript
console.log(window.innerWidth);   // Width of the window's content area
console.log(window.innerHeight);  // Height of the window's content area
```


- #### ✅ Opening and closing windows
```javascript
let myWindow = window.open("https://google.com", "_blank", "width=500,height=500");
myWindow.close();
```

```javascript
let myWindow = window.open("about:blank", "_blank", "width=500,height=500");

myWindow.document.write("<h1>Hello! This will close in 9 seconds.</h1>");

setTimeout(() => {
    myWindow.close();
}, 9000);

```

- #### ✅ Accessing global variables
```javascript
var name = "John";
console.log(window.name); // John
```

- #### ✅ Scroll positions
```javascript
console.log(window.scrollX); // How far scrolled horizontally
console.log(window.scrollY); // How far scrolled vertically
```
----

### 🔵 2. `location` Object – The URL Address Bar
- ###### The `location` object represents the URL of the current page. You can read or change it to redirect the user.
- ###### The `location` object allows you to interact with the URL of the current document. 


### ✅ Common Properties
| Property          | Description                                                    |
| ----------------- | -------------------------------------------------------------- |
| location.href     | Returns Full URL of current page                               |
| location.hostname | Return Domain name or IP address of URL (e.g. www.example.com) |
| location.pathname | Returns Path after domain (e.g., /path/to/page)                |
| location.protocol | Returns protocol of the URL(http: or https: )                  |
| location.port     | Port number (if any)                                           |

### ✅ Common Methods
```javascript
// Redirect to another site
location.assign("https://example.com");

// Reload the page
location.reload();

// Replace current URL (won’t store in history)
location.replace("https://example.com");
```

#### Example on `location` object
```javascript
console.log(location.href);         // Logs full URL
console.log(location.hostname);     // Logs domain name
console.log(location.pathname);     // Logs path (e.g., /about)

function reloadPage() {
  location.reload(); // Refreshes the page
}

function goToGoogle() {
  location.assign("https://www.google.com");
}
```
---

### 🔵 3. `history` Object – Browser History Control
- ######  The `history` object allows you to navigate through the browser's session history.
- ######  It provides methods to move forward, backward, or to specific pages in the history stack.
- ###### It lets you navigate through the user’s browsing history.

### ✅ Methods
| Method            | Description                                      |
| ----------------- | ------------------------------------------------ |
| history.back()    | Go to the previous page                          |
| history.forward() | Go to the next page                              |
| history.go(n)     | Move `n` steps (e.g. `-1` for back, `1` forward) |

### ✅ Example
```javascript
history.back();      // Go one page back
history.forward();   // Go forward
history.go(-2);      // Go two pages back
```

### ✅ Note:
  - ##### You can’t read the actual URLs in the history due to security reasons—only navigate.
---

### 🔵 4. navigator Object – Browser & System Info
- ######  This gives details about the browser and device environment.


#### ✅ Common Properties
| Property            | Description                               |
| ------------------- | ----------------------------------------- |
| navigator.userAgent | Full info about browser                   |
| navigator.language  | Language set in the browser (e.g., en-US) |
| navigator.platform  | OS (like Win32, Linux)                    |
| navigator.onLine    | true if connected to internet             |

#### ✅ Example
```javascript
console.log(navigator.userAgent);  // Browser engine info
console.log(navigator.language);   // en-US
console.log(navigator.onLine);     // true or false
```

---

### 🔵 5. `screen` Object – User Screen Info
- ###### Gives information about the user’s screen resolution, not the window.

#### ✅ Common Properties
| Property           | Description                          |
| ------------------ | ------------------------------------ |
| screen.width       | Full screen width in pixels          |
| screen.height      | Full screen height in pixels         |
| screen.availWidth  | Width available (excluding taskbar)  |
| screen.availHeight | Height available (excluding taskbar) |

#### ✅ Example
```javascript
console.log(screen.width);        // e.g., 1920
console.log(screen.availHeight);  // e.g., 1040
```
---

### 🔵 6. `alert()`, `confirm()`, and `prompt()` – Dialog Boxes
- ##### These are basic but important BOM methods.

#### ✅ alert()
- Shows a simple message box (one button)
```javascript
alert("This is a warning!");
```

#### ✅ confirm()
- Shows a message with OK and Cancel. Returns `true` or `false`.
```javascript
let result = confirm("Do you want to continue?");
if (result) {
  alert("You pressed OK");
} else {
  alert("You pressed Cancel");
}
```

#### ✅ prompt()
- Takes input from the user as a string.
```javascript
let name = prompt("What is your name?");
alert("Hello, " + name);
```

---

### 🔵 7. Timers – `setTimeout()` and `setInterval()`
- ###### Used to delay code or repeat it after intervals.

#### ✅ `setTimeout()` – run once after a delay of some milliseconds
```javascript
setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);
```

#### ✅ `setInterval()` – run repeatedly at interval
```javascript
let count = 0;
setInterval(() => {
  count++;
  console.log("Count: ", count);
}, 1000);
```

#### ✅ Stop the interval
```javascript
let id = setInterval(() => console.log("Tick"), 1000);
clearInterval(id);  // Stops it
```
---




