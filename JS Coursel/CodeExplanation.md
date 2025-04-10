# Image Slider (Carousel)

This project is a simple **image slider (carousel)** built with **HTML, CSS, and JavaScript**. The slider automatically changes images every 3 seconds and allows users to manually navigate using "Previous" (`<`) and "Next" (`>`).

## Features
- Auto-sliding images every 3 seconds.
- Manual navigation with previous and next buttons.
- Smooth transition effect.
- Responsive design.

## Project Structure
```
project-folder/
│── index.html   # Main HTML file
│── c.css        # External CSS file (linked but not provided in code)
│── c.js         # External JS file (linked but not provided in code)
```

## How It Works

### 1. **HTML Structure**
- A `.container` holds the images and navigation buttons.
- The `.img-wrapper` contains all images in a row.
- The buttons (`.prev` and `.next`) allow manual navigation.

```html
<div class="container">
    <div class="img-wrapper">
        <img src="image1.jpg" alt="1">
        <img src="image2.jpg" alt="2">
        <img src="image3.jpg" alt="3">
    </div>
    <button class="btn prev">&lt;</button>
    <button class="btn next">&gt;</button>
</div>
```

### 2. **CSS Styling**
- The `.img-wrapper` uses `display: flex;` to arrange images in a row.
- The `transform: translateX()` shifts images to create a sliding effect.
- Navigation buttons are positioned in the center.

```css
.img-wrapper {
    display: flex;
    transition: transform 0.5s ease;
}
.btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
}
```

### 3. **JavaScript Functionality**
- `showImg()` moves the images left/right using `translateX()`.
- `setInterval()` automatically advances the images every 3 seconds.
- Click events on `.prev` and `.next` buttons change images manually.

```js
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const wrapper = document.querySelector('.img-wrapper');
const imgs = document.querySelectorAll('.img-wrapper img');
let idx = 0;

function showImg() {
    if (idx >= imgs.length) idx = 0;
    if (idx < 0) idx = imgs.length - 1;
    wrapper.style.transform = `translateX(-${idx * 100}%)`;
}

next.addEventListener('click', () => { idx++; showImg(); });
prev.addEventListener('click', () => { idx--; showImg(); });

setInterval(() => { idx++; showImg(); }, 3000);

showImg();
```

## How to Run
1. Download or clone the repository.
2. Open `index.html` in your browser.
3. Enjoy the image slider!

## Future Enhancements
- Add dots/indicators to show the current image.
- Pause auto-slide on hover.
- Implement infinite looping for a seamless experience.

---

Enjoy coding! 🚀