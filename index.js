import { greet, print } from "./utils.js"
// importing the functions from utils.js file with named export


let isMathRequired = true;
if (isMathRequired) {
    // dynamic import
    // await import("./math.js");

    const { add } = await import("./math.js")

    console.log("Dynamic Import: 5 + 10 =", add(5, 10));
}

