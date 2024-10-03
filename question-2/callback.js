// Create a method resolvedPromise that resolves a message after a 500ms timeout.
// Create a method rejectedPromise that rejects an error message after a 500ms timeout.
// Call both promises separately and handle the resolved and rejected results, then output to console.

const resolvedPromise = () => {
    // Return new promise...
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Create message for ease of access.
            let message = {"message": "delayed success!"}
            
            // Resolve the message after 500ms.
            resolve(message);
        }, 500);
    });
}

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Create message for ease of access.
            let message = {"error": "delayed exception!"}

            // Reject the message after 500ms.
            reject(message);
        }, 500);
    });
}

// Testing:
resolvedPromise().then((message) => console.log(message));
rejectedPromise().catch((message) => console.error(message));