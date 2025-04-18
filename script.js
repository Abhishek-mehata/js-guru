// // Mouse Event
// document.addEventListener("mousemove", (e) => {
//     console.log(`Mouse moved to (${e.clientX}, ${e.clientY})`);
// });

// // Keyboard Event
// document.addEventListener("keydown", (e) => {
//     console.log(`Key pressed: ${e.key}`);
// });


// function checkPal(str) {
//     str = str.toLowerCase()
//     let j = str.length - 1

//     for (i = 0; i < str.length; i++) {
//         if (str[i] !== str[j]) {
//             return false
//         }
//         j--
//     }
//     return true;

// }

// console.log(checkPal("nitin"))

// function factorial(n){
//     if(n==0)
//     {
//         return 1;
//     }

//     console.log(n)
//     return n * factorial(n-1)
// }



// # Fabonacci Sequence using Recursion
// The Fibonacci sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, ...
// Each number is the sum of the previous two numbers:

// F(n)=F(n−1)+F(n−2)


// Removing an Event Listener
function sayHello() { 
   console.log("Hello!");
}

let btn = document.getElementById("btn");
btn.addEventListener("click", sayHello);
btn.removeEventListener("click", sayHello);

<canvas id="starCanvas" ></canvas>
<style>
	canvas{
		height: 100vh;
		width: 100vw;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}
</style>

<script>
  const canvas = document.getElementById("starCanvas");
  const ctx = canvas.getContext("2d");

  const stars = [];
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
    });
  }

  let mouseX = canvas.width / 2;
  let mouseY = canvas.height / 2;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach((star) => {
      const dx = (mouseX - canvas.width / 2) * 0.002;
      const dy = (mouseY - canvas.height / 2) * 0.002;

      star.x += dx;
      star.y += dy;

      // Wrap around
      if (star.x < 0) star.x = canvas.width;
      if (star.x > canvas.width) star.x = 0;
      if (star.y < 0) star.y = canvas.height;
      if (star.y > canvas.height) star.y = 0;

      ctx.fillStyle = "white";
      ctx.fillRect(star.x, star.y, star.size, star.size);
    });

    requestAnimationFrame(animate);
  }

  animate();
</script>
<style>
  body {
	margin: 0;
	overflow: auto;
	background-color: black;
  }
  canvas {
	display: block;
	margin: 0 auto;
	background-color: black;
  }