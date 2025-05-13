// Send a DELETE request to the given URL (to delete a resource)
fetch("https://api.example.com/users/1", {
    method: "DELETE"  // the DELETE method
})
    .then(response => {
        // Check if the response status is OK (status code 200–299)
        if (response.ok) {
            console.log("Resource Deleted");  // If yes, resource was deleted successfully
        } else {
            console.log("Delete Operation Failed");  // If not, deletion failed
        }
    })
    .catch(error => {
        // If there’s any network error (like no internet or server unreachable), catch it here
        console.error("Error deleting resource:", error);
    });
