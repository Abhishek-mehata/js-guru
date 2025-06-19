async function getPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const data = await response.json()
        // console.log(")
        console.log(data)
    } catch (error) {
        console.log("Error captured: ", error)
    }
}

getPost()
